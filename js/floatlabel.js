$(document).ready(function()
{    (function() {

        $('#Form')
                .find('input')
                .each(function() {


                    $(this).on('change', function() {
                        $this = $(this);
                        if (this.value !== "") {
                            $this.addClass('filled');
                        }
                        else {
                            $this.removeClass('filled');
                        }
                    });
                });
    })();
});

