$slide = $('[data-slide]');
if ($slide.length > 0) {
    $img = $slide.find('img');

    $slide.find('[data-slide-link-after]').click(function(e) {
        e.preventDefault();
        var after = $slide.data('slide-current') + 1;

        if (after == $slide.data('slide-end')) {
            $slide.find('[data-slide-link-after]').hide();
        } else {
            $slide.find('[data-slide-link-after]').show();
        }

        if (after == $slide.data('slide-start')) {
            $slide.find('[data-slide-link-before]').hide();
        } else {
            $slide.find('[data-slide-link-before]').show();
        }

        $slide.data('slide-current', after);

        if (after < 10) {
            after = '0' + after;
        }

        $img.attr('src', $slide.data('slide') + after + '.jpg');
    });

    $slide.find('[data-slide-link-before]').click(function(e) {
        e.preventDefault();
        var after = $slide.data('slide-current') - 1;

        if (after == $slide.data('slide-start')) {
            $slide.find('[data-slide-link-before]').hide();
        } else {
            $slide.find('[data-slide-link-before]').show();
        }

        if (after == $slide.data('slide-end')) {
            $slide.find('[data-slide-link-after]').hide();
        } else {
            $slide.find('[data-slide-link-after]').show();
        }

        $slide.data('slide-current', after);

        if (after < 10) {
            after = '0' + after;
        }

        $img.attr('src', $slide.data('slide') + after + '.jpg');
    });
}
