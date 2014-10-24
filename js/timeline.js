/**
 * Instantiate vertical-timeline.
 *
 * @constructor
 * @param {Object} options The options to override the defaults
 */
function TimeLine(options) {
    if (window.jQuery) {
        var $ = window.jQuery;
    } else {
        throw new Error('jQuery is required to use vertical-timeline');
    }

    'use strict';

    options = options || {};

    this.$timelineBlock = $(options.timelineBlock) || $('.cd-timeline-block');
    this.$scrollElement = $(options.scrollElement) || $(window);

    this.hideBlocks();
    this.$scrollElement.on('scroll', {blocks: this.$timelineBlock}, this.onScroll);
}

/**
 * Hide timeline blocks which are outside the viewport
 *
 * @returns {boolean} Returns true.
 */
TimeLine.prototype.hideBlocks = function() {
    this.$timelineBlock.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    return true;
};

/**
 * On scolling, show/animate timeline blocks when enter the viewport
 *
 * @returns {boolean} Returns true.
 */
TimeLine.prototype.onScroll = function(event) {
    event.data.blocks.each(function(){
        if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        }
    });

    return true;
};


/**
 * Factory method for creating a CodyHouse vertical-timeline object
 *
 * @param {Object} options The options to override the defaults
 */
TimeLine.enable = function(options) {
    'use strict';

    return new TimeLine(options);
};