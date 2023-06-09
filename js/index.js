document.addEventListener('DOMContentLoaded', function() {
    var tooltips = document.querySelectorAll('.tooltip');
    
    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseover', function() {
            var tooltipText = this.querySelector('.tooltip-text');
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = 1;
        });
        
        tooltip.addEventListener('mouseout', function() {
            var tooltipText = this.querySelector('.tooltip-text');
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = 0;
        });
    });
});