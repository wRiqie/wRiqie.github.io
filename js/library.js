 new WOW().init();

        $(document).ready(function() {

            var owl = $('.owl-carousel');
            owl.owlCarousel({
                loop: true,
                margin: 5,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: false
                    }
                }

            });
            // Go to the next item
            $('.customNextBtn').click(function() {
                    owl.trigger('next.owl.carousel');
                })
                // Go to the previous item
            $('.customPrevBtn').click(function() {
                // With optional speed parameter
                // Parameters has to be in square bracket '[]'
                owl.trigger('prev.owl.carousel', [300]);
            })

        })

        $(document).ready(function() {

            $('.venobox').venobox();


        });