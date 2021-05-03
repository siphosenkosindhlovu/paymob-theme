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
    <header class="page-section">
      <div class="container">
        <div class="row flex-lg-row-reverse">
          <div class="col-lg-6 d-flex justify-content-end z-index-negative">
            <?php paymob_post_thumbnail(); ?>
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <div>
              <?php the_title('<h1>', '</h1>'); ?>
              <?php
              if (get_field('page_subtitle')) :
              ?>
                <p>
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

      </div>
    </header>
  <?php

  endwhile; // End of the loop.
  ?>
  <section class="page-section bg-light">
    <div class="container text-center">
      <h2 class="mb-3"><?php echo __('Paymob Solutions'); ?> </h2>
      <p class="fs-2md mb-10 mb-xl-22"> <?php echo __('On-land Payment Infrastructure Solutions') ?></p>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

        <?php
        $args = array(
          'post_type' => 'solutions'
        );
        $solutions = new WP_Query($args);
        if ($solutions->have_posts()) :
          while ($solutions->have_posts()) :
            $solutions->the_post();
        ?>
            <div class="col">
              <a href="<?php the_permalink(); ?>" class="btn card d-block rounded-3 mb-4 <?php the_field('header_color_class'); ?> ratio ratio-1x1">

                <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="" class="p-4 rounded-3 img-fluid card-img" style="object-fit: contain">
                <div class="card-img-overlay rounded-3 d-flex justify-content-center" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.4)); background-size: cover; background-position: 84% 50%; background-repeat: no-repeat;">
                  <div class="text-white fs-5 fw-bold mt-auto mb-6">
                    <?php echo str_replace('for', '', get_the_title()); ?>
                  </div>
                  </figure>
                </div>
              </a>
            </div>
        <?php
          endwhile;
        endif;
        wp_reset_query();
        ?>
      </div>

    </div>

  </section>
  <section class="page-section bg-navy text-white pb-0 pb-lg-0 container-fluid">
    <div class="row">
      <div class="container-md-7 container-lg-6 me-md-0 d-flex flex-column pb-5 pb-md-14 page-section">
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
  </section>
  <section class="bg-primary  text-light pb-0 pb-lg-0 container-fluid">
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

  <section class=" pb-0 pb-lg-0 container-fluid">
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
  <section class="bg-accent text-white pb-0 pb-lg-0 container-fluid">
    <div class="row">
      <div class="container container-md-7 container-lg-6 me-md-0 d-flex flex-column pb-5 pb-md-14 pe-md-14 page-section">
        <h2 class="text-white">
          Why choose Paymob?
        </h2>
        <p class="text-white fs-md">
          The only comprehensive solution including all the required components for the launch on turnkey basis of any scale and complexity.
      </div>
      <div class="col-md-5 col-lg-6 ms-0 row p-0 bg-blue-light-1">
        <img src='<?php echo get_template_directory_uri() . "/dist/images/Why-choose-Paymob.svg" ?>' class="p-0" style="object-fit: cover">
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
