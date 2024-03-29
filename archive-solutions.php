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
      <div class="container my-5 my-lg-14 w-lg-50 text-center">
        <h1 class="page-title">
          Products
        </h1>
        <p class="has-navy-color">
          Browse our diverse range of products for banking and financial instituions, from physical products to cloud based services. </p>
      </div>
    </section>
    <?php
    /* Start the Loop */
    $i = 1;
    while (have_posts()) :
      the_post();

      /*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
    ?>
      <article class="page-section">
        <div class="container">
          <div class=" row flex-column-reverse align-items-center<?php echo $i % 2 === 0 ? ' flex-md-row-reverse' : ' flex-md-row' ?>">

            <div class="col-md-3 col-lg-6 text-center">
              <?php the_post_thumbnail('medium', array('class' => 'img-fluid')); ?>
            </div>
            <div class="col-md-9 col-lg-6 d-flex flex-column">
              <?php the_title('<h2>', '</h2>'); ?>
              <?php
              if (get_field('page_subtitle')) :
              ?>
                <p class="text-accent fs-md">
                  <?php the_field('page_subtitle'); ?>
                </p>
              <?php
              endif;
              ?>
              <?php
              if (get_field('leading_paragraph')) :
                the_field('leading_paragraph');
              endif;
              ?>
              <div class="is-style-link-button">
                <a href="<?php the_permalink() ?>" class="wp-block-button__link">
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
  <?php
      $i += 1;
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
