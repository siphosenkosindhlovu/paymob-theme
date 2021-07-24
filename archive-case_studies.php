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
      <div class="d-flex flex-column-reverse flex-lg-row-reverse justify-content-between">
        <div class="col-lg-6 d-flex justify-content-center z-index-negative">

          <img src="<?php echo get_template_directory_uri() . "/dist/images/case-study.png"; ?>" alt="" class="img-fluid">
        </div>
        <div class="container-lg-1 m-0 p-0"></div>
        <div class="container container-lg-5 my-5 my-lg-14 me-lg-0 d-flex align-items-center">
          <div>
            <h1 class="page-title">
              <?php post_type_archive_title(); ?>
            </h1>
            <p class="text-accent fs-md fw-bold">
              Read our Paymob Case studies and examples of clients and services using Paymob
            </p>

          </div>
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
      get_template_part('template-parts/content', 'case_studies');

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
