/**
 * Thoughts sharing functionality
 * Handles sharing thoughts with native Web Share API fallback to clipboard
 */

function shareThought(thoughtId, thoughtText) {
    const url = `${window.location.origin}/thoughts/${thoughtId}/`;
    
    if (navigator.share) {
        // Use native sharing if available (mobile devices, some desktop browsers)
        navigator.share({
            title: 'Quick Thought - Mario Calín',
            text: thoughtText,
            url: url
        }).catch(console.error);
    } else {
        // Fallback: copy URL to clipboard for timeline view
        copyUrlToClipboard(url, event.target);
    }
}

function copyThoughtUrl() {
    const url = window.location.href;
    copyUrlToClipboard(url, event.target);
}

function copyUrlToClipboard(url, buttonElement) {
    navigator.clipboard.writeText(url)
        .then(() => {
            // Show temporary feedback
            const button = buttonElement.closest('button');
            const originalText = button.innerHTML;
            
            // Update button appearance
            button.innerHTML = '<i class="fas fa-check me-1"></i>Copied!';
            button.classList.remove('btn-outline-primary', 'btn-outline-secondary');
            button.classList.add('btn-success');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('btn-success');
                button.classList.add(
                    originalText.includes('Copy') ? 'btn-outline-secondary' : 'btn-outline-primary'
                );
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy to clipboard:', err);
            // Show error feedback
            const button = buttonElement.closest('button');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-exclamation me-1"></i>Error';
            button.classList.remove('btn-outline-primary', 'btn-outline-secondary');
            button.classList.add('btn-danger');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('btn-danger');
                button.classList.add(
                    originalText.includes('Copy') ? 'btn-outline-secondary' : 'btn-outline-primary'
                );
            }, 2000);
        });
}

// Initialize keyboard shortcuts and event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Add keyboard shortcut for copying URL (Ctrl+L or Cmd+L) - only on individual thought pages
    if (window.location.pathname.match(/\/thoughts\/\w+\/$/)) {
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
                e.preventDefault();
                copyThoughtUrl();
            }
        });
    }
});

// Make functions globally available
window.shareThought = shareThought;
window.copyThoughtUrl = copyThoughtUrl;