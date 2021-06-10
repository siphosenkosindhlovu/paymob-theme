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
      <div class="navbar">
        <div class="container-fluid d-flex justify-content-between`">
          <?php echo the_custom_logo(); ?>
          <?php
          wp_nav_menu(
            array(
              'theme_location' => 'top-middle',
              'menu' => 'Main Menu',
              'container' => false,
              'echo' => true,
              'add_link_class' => 'nav-link',
              "menu_class" => 'nav'
            )
            );
          wp_nav_menu(
            array(
              'theme_location' => 'top-right',
              'menu' => 'CTA Menu',
              'container' => false,
              'echo' => true,
              'add_link_class' => 'nav-link btn',
              "menu_class" => 'nav'
            )
          )
          ?>
        </div>
      </div>
    </header><!-- #masthead -->