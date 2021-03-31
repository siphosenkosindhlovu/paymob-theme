<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<section class="page-banner">
    <div class="d-flex flex-column flex-lg-row-reverse justify-content-between">
      <div class="col-lg-6 d-flex justify-content-end z-index-negative">
        <?php paymob_post_thumbnail(); ?>
      </div>
      <div class="container-lg-1 m-0 p-0"></div>
      <div class="container container-lg-5 my-5 my-lg-14 me-lg-0 d-flex align-items-center">
        <div>
          <?php the_title( '<h1>', '</h1>' ); ?>
          <?php
            the_content();
          ?>
        </div>
      </div>
    </div>
  </section>


</article><!-- #post-<?php the_ID(); ?> -->
