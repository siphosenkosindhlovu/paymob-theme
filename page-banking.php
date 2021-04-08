<?php

/**
 * The template for Banking Enterprises
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

get_header();
?>

<main id="primary" class="site-main">

  <?php
  while (have_posts()) :
    the_post();
  ?>
    <header class="page-section" style="background: linear-gradient(0deg, rgba(8, 36, 59, 0.8), rgba(8, 36, 59, 0.8)), url(<?php echo get_the_post_thumbnail_url() ?>); background-size: cover">
      <div class="container">
        <div class="col-lg-8 d-flex align-items-center">
          <div>

            <?php the_title('<h1 class="text-white">', '</h1>'); ?>
            <?php
            if (get_field('page_subtitle')) :
            ?>
              <p class="text-accent fs-md fw-bold">
                <?= the_field('page_subtitle'); ?>
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

  endwhile; // End of the loop.
  ?>
  <section class="container page-section">
    <div class="row">
      <div class="col-md-8">
        <h2><?php echo __('Paymob Solutions'); ?> </h2>
        <p class="text-accent fs-md fw-bold"> <?php echo __('On-land Payment Infrastructure Solutions') ?></p>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

          <?php
          $args = array(
            'post_type' => 'solutions'
          );
          $payment_points = new WP_Query($args);
          if ($payment_points->have_posts()) :
            while ($payment_points->have_posts()) :
              $payment_points->the_post();
          ?>
              <div class="col">
                <button class="btn rounded-0 mb-4 <?php the_field('header_color_class'); ?> ratio ratio-1x1" data-bs-toggle="modal" data-bs-target="#post-<?= the_ID() ?>">
                  <div class="d-flex align-items-center justify-content-center flex-column p-14">

                    <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="" class="mb-4 img-fluid">
                    <div class="text-white fs-5 fw-bold text-nowrap">
                      <?php echo str_replace('for', '', get_the_title()); ?>
                    </div>
                    </figure>
                  </div>
                </button>
              </div>
          <?php
            endwhile;
          endif;
          wp_reset_query();
          ?>
        </div>
      </div>
      <div class="col-md-4">
        <h2 class="mb-lg-14">
          Latest News
        </h2>
        <div class="row row-cols-1">
          <?php
          $args = array(
            'post_type' => 'post',
            'category' => 5,
            'orderby' => 'ID',
            'order' => 'ASC',
            'posts_per_page' => 3,
          );
          $news = new WP_Query($args);
          if ($news->have_posts()) :
            while ($news->have_posts()) :
              $news->the_post();
          ?>
              <div>
                <article class="position-relative mb-4">
                  <div class="">
                    <h3 class="article-title fs-4">
                      <a href="<?php echo get_permalink(); ?>" class="stretched-link">
                        <?php the_title(); ?>
                      </a>
                    </h3>
                    <div class="">
                      <div class="d-flex align-items-center">
                        <?php
                        $author_ID = get_the_author_meta('ID');
                        if (get_avatar_url($author_ID)) :
                        ?>
                          <img src="<?php echo get_avatar_url($author_ID); ?>" class="article-author-thumb-md rounded-circle">
                        <?php
                        endif;
                        ?>
                        <div class="fs-sm ms-4">
                          <div class="fw-bold"><?php the_author(); ?></div>
                          <div class="text-accent">
                            <?php the_date('F j, Y'); ?>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <hr>
              </div>

          <?php
            endwhile;
          else :
            echo 'No posts';
          endif;
          ?>

        </div>
      </div>
    </div>

  </section>
  <section class="page-section bg-navy text-white pb-0 pb-lg-0">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-lg-6 pe-md-14 d-flex flex-column pb-5 pb-lg-14">
          <h2 class="text-white">
            Paymob Gateway
          </h2>
          <p class="text-white fs-md">
            Multi-channel payment gateway for banks includes both the best in class hardware and bespoke software.
          </p>
          <div class="mt-auto">
            <a class="btn btn-outline-light" href="http://" target="_blank" rel="noopener noreferrer">More Information</a>
          </div>
        </div>
        <div class="col-md-5 col-lg-6 row p-0">

          <img src='<?php echo get_template_directory_uri() . "/dist/images/Paymob-Gateway.svg" ?>' style="object-fit: cover">
        </div>
      </div>

    </div>
  </section>
  <section class="bg-primary  text-light pb-0 pb-lg-0">
    <div class="row">
      <div class="container-md-7 container-lg-6 me-md-0 d-flex flex-column pb-5 pb-md-14 page-section">
        <h2 class="text-white">
          Payment systems
        </h2>
        <p class="text-white fs-md">
          We also, provide universal access to international payment systems: VISA, MasterCard, Alipay, American Express etc. </p>

      </div>
      <div class="col-md-5 col-lg-6 ms-0 row p-0">
        <img src='<?php echo get_template_directory_uri() . "/dist/images/Payment-systems.png" ?>' class="p-0" style="object-fit: cover">
      </div>
    </div>
  </section>

  <section class=" pb-0 pb-lg-0">
    <div class="row">
      <div class="container-md-7 container-lg-6 me-md-0 d-flex flex-column pb-5 pb-md-14 pe-md-14 page-section">
        <h2 class="">
          About us
        </h2>
        <p class="fs-md">
          Paymob Technology — leading Fintech company in the payment industry since 2011</p>
        <div class="mt-auto">
          <a href="/about" class="btn btn-outline-primary">More Information</a>
        </div>
      </div>
      <div class="col-md-5 col-lg-6 ms-0 row p-0 bg-blue">
        <img src='<?php echo get_template_directory_uri() . "/dist/images/About-us.svg" ?>' class="p-0" style="object-fit: cover">
      </div>
    </div>
  </section>
  <section class="bg-accent text-white pb-0 pb-lg-0">
    <div class="row">
      <div class="container-md-7 container-lg-6 me-md-0 d-flex flex-column pb-5 pb-md-14 pe-md-14 page-section">
        <h2 class="text-white">
          Why choose Paymob?
        </h2>
        <p class="text-white fs-md">
          The only comprehensive solution including all the required components for the launch on turnkey basis of any scale and complexity.
      </div>
      <div class="col-md-5 col-lg-6 ms-0 row p-0 bg-blue-light-1">
        <img src='<?php echo get_template_directory_uri() . "/dist/images/Why-Choose-Paymob.svg" ?>' class="p-0" style="object-fit: cover">
      </div>
    </div>
  </section>
  <section class="page-section container">
    <h2>
      Best Solutions
    </h2>
    <div>
      <ul class="list-description row row-cols-1 row-cols-md-2">
        <li>
          <p>Standalone All-in-One Paymob Smart POS</p>
        </li>
        <li>
          The most advantage solution supporting SmartPos, mPos, SmartBox in one gateway
        </li>
        <li>
          <p>Open payment and fiscalization</p>
        </li>
        <li>
          <p>The working interfaces for different processing systems</p>
        </li>
        <li>
          <p>An open platform that allows to build and install your own applications, on smartPos</p>
        </li>
        <li>
          <p>Cash register software as an option.</p>
        </li>
      </ul>
    </div>
  </section>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
