<?php

/**
 * Template part for displaying page content in case_studies.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="page-banner">
      <div class="container d-flex align-items-center">
        <div>
          <h2><?php echo __('Case Study', 'paymob'); ?></h2>
          <?php the_title('<h3 class="h3 text-accent">', '</h3>'); ?>
        </div>
      </div>
  </header>

  <div class="entry-content container">
    <?php
    the_content();
    ?>
  </div><!-- .entry-content -->

  <?php if (get_edit_post_link()) : ?>
    <footer class="entry-footer">
      <?php
      edit_post_link(
        sprintf(
          wp_kses(
            /* translators: %s: Name of current post. Only visible to screen readers */
            __('Edit <span class="screen-reader-text">%s</span>', 'paymob'),
            array(
              'span' => array(
                'class' => array(),
              ),
            )
          ),
          wp_kses_post(get_the_title())
        ),
        '<span class="edit-link">',
        '</span>'
      );
      ?>
    </footer><!-- .entry-footer -->
  <?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->