<?php

/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @packagepaymob_
 */

get_header();
?>

<main id="primary" class="site-main">
  <?php if (have_posts()) : ?>
    <section class="page-banner mb-10 mb-lg-14">
      <div class="container container-lg-5 my-5 my-lg-14 me-lg-0 d-flex align-items-center">
        <div>
          <h1 class="page-title">
            <?php echo __('Paymob News', 'paymob') ?>
          </h1>
        </div>
      </div>
    </section>
  <?php
    /* Start the Loop */
    while (have_posts()) :
      the_post();

      /*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
      get_template_part('template-parts/content', 'news');

    endwhile;

    the_posts_navigation();

  else :

    get_template_part('template-parts/content', 'none');

  endif;
  ?>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();