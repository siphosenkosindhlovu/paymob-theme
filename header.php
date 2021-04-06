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
    <header id="masthead" class="shadow">
      <div class="bg-blue-dark">
        <div class="container">
          <!-- top-nav-menu goes here -->
          <nav class="nav nav-top nav-minor">
            <?php
            wp_nav_menu(
              array(
                'theme_location' => 'top-menu',
                'menu' => 'Top Menu',
                'container' => false,
                'echo' => true,
                'add_link_class' => 'nav-link',
                "menu_class" => 'nav'
              )
            )
            ?>
          </nav>
        </div>
      </div>
      <div class="navbar navbar-expand-md bg-primary">
        <div class="container d-flex justify-content-between`">
          <div class="navbar-brand">
            <?php the_custom_logo(); ?>
          </div>
          <nav class="nav nav-minor align-items-center">
            <?php
            wp_nav_menu(
              array(
                'theme_location' => 'mid-menu',
                'menu' => 'Mid Menu',
                'container' => false,
                'echo' => true,
                'add_link_class' => 'nav-link',
                "menu_class" => 'nav'
              )
            )
            ?>
            <!-- <?php
                  get_search_form();
                  ?> -->

          </nav>
          <!-- mid-nav-menu and search bar here -->
        </div>
      </div>
      <div class="bg-white">
        <div class="container">
          <?php
          wp_nav_menu(array(
            'theme_location' => 'sub-menu',
            'menu' => 'Sub Menu',
            'container' => 'div',
            'container_id' => 'sub-nav',
            'menu_class' => 'nav',
            'add_link_class' => 'nav-link',
            'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
            'walker' => new WP_Bootstrap_Navwalker(),
          ))
          ?>
        </div>
      </div>
    </header><!-- #masthead -->