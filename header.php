<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Paymob
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="page" class="site">
    <!-- <a class="skip-link sr-only" href="#primary"><?php esc_html_e('Skip to content', 'paymob'); ?></a>
   -->
    <header id="masthead">
      <div class="navbar navbar-expand-lg">
        <div class="container-fluid navbar-container">
          <?php echo the_custom_logo(); ?>
          <div class="nav-main">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#top-menu" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="top-menu">
              <?php
              wp_nav_menu(
                array(
                  'theme_location' => 'top-middle',
                  'menu' => 'Main Menu',
                  'container' => false,
                  'echo' => true,
                  'add_link_class' => 'nav-link',
                  "menu_class" => 'menu-top-menu nav flex-column flex-lg-row',
                  'walker' => new Paymob_Walker()
                )
              ); ?>
            </div>
          </div>
          <?php
          wp_nav_menu(
            array(
              'theme_location' => 'top-right',
              'menu' => 'CTA Menu',
              'container' => false,
              'echo' => true,
              'add_link_class' => 'nav-link btn',
              "menu_class" => 'nav nav-cta'
            )
          )
          ?>
        </div>
      </div>
    </header><!-- #masthead -->