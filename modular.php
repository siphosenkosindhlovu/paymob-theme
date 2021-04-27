<?php

/**
 * Template Name: Modular Page
 *
 * @package WordPress
 */

get_header();
?>

<main id="primary" class="site-main">

<h1>Im an page</h1>
  <?php
  while (have_posts()) :
    the_post();
  ?>
    <header class="page-banner">
      <div class="d-flex flex-column-reverse flex-lg-row-reverse justify-content-between">
        
        <div class="container my-5 my-lg-14 me-lg-0 d-flex align-items-center">
          <div>

            <?php the_title('<h1>', '</h1>'); ?>
            <?php
            if (get_field('page_subtitle')) :
            ?>
              <p class="text-accent fs-md fw-bold">
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

          </div>
        </div>
      </div>
    </header>
    <?php
    echo "hi";
    if (have_rows('flexible_content')) :
      while (have_rows('flexible_content')) : the_row();
      echo get_row_layout();
        get_template_part('template-parts/modules/' . get_row_layout());
      endwhile;
    endif;
    ?>
  <?php
  endwhile; // End of the loop.
  ?>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();
