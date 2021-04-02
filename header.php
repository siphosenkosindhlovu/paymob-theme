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
          <nav class="nav nav-top">
            <?php
            paymob_nav_menu_links(
              array(
                'theme_location' => 'top-menu',
                'menu' => 'Top Menu',
                'container' => false,
                'echo' => false,
                'add_link_class' => 'nav-link'
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
          <nav class="nav nav-top align-items-center">
            <?php
            paymob_nav_menu_links(
              array(
                'theme_location' => 'mid-menu',
                'menu' => 'Mid Menu',
                'container' => false,
                'echo' => false,
                'add_link_class' => 'nav-link'
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
          <!-- <ul class="nav">
            <li class="nav-item">
              <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="about.ejs" class="nav-link">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Industry Sectors
              </a>
              <ul class="dropdown-menu nav-dropdown" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item nav-link" href="#">Point of Sale</a></li>
                <li><a class="dropdown-item nav-link" href="#">Small Business</a></li>
                <li><a class="dropdown-item nav-link" href="#">Retail</a></li>
                <li><a class="dropdown-item nav-link" href="#">Taxis and Deliveries </a></li>
                <li><a class="dropdown-item nav-link" href="#">Restaurants and Takeaway</a></li>
                <li><a class="dropdown-item nav-link" href="#">Hair and Beauty Salons</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Point of Sale</a></li>
                <li><a class="dropdown-item" href="#">Small Business</a></li>
                <li><a class="dropdown-item" href="#">Retail</a></li>
                <li><a class="dropdown-item" href="#">Taxis and Deliveries </a></li>
                <li><a class="dropdown-item" href="#">Restaurants and Takeaway</a></li>
                <li><a class="dropdown-item" href="#">Hair and Beauty Salons</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">News</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Contact</a>
            </li>
          </ul> -->
        </div>
      </div>
    </header><!-- #masthead -->