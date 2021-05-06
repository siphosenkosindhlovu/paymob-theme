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
  $post_ID;
  while (have_posts()) :
    the_post();
    $post_ID = get_the_ID();
  ?>
    <header class="page-section">
      <div class="container">
        <div class="row flex-lg-row-reverse">
          <div class="col-lg-6 z-index-negative">
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
  echo $post_ID;
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
            <div class="">
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
  <div class="page-section">
    <div class="container">
      <div class="row justify-content-between row-cols-md-4">
        <?php
        $features = get_field('features', $post_ID);
        foreach ($features as $feature) :
        ?>
          <div class="text-center">
            <img src="<?php echo $feature['image']['url']; ?>" alt="<?php echo $feature['image']['alt']; ?>" class="img-fluid mb-4">
            <h3 class="mb-1"><?php echo ($feature['title']); ?></h3>
            <p>
              <?php echo $feature['description']; ?>
            </p>
          </div>
        <?php
        endforeach;
        ?>
      </div>
    </div>
  </div>
  <div class="page-section bg-navy">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-6">
          <img src="">
        </div>
        <div class="col-md-8 col-lg-6 text-white">
          <h2 class="text-accent">
            <?php echo __('Why choose Paymob', 'paymob'); ?>
          </h2>
          <p class="text-white">
            Paymob provides powerful, easy-to-use, intuitive, and above all reliable hair and beauty salon solution, with multiple payment options. Paymob provide their contactless payment to phone technology across the UK and Europe.
          </p>
          <p>
            Our revolutionary Tap to Phone app is popular with mobile hairdressers, barbers and beauticians who want to be able to accept contactless payments on the go using their smartphone. There's no need to worry about charging or carrying around any extra equipment such as a card machine – all you need is an internet connection and your mobile phone. All the customer needs is their card, there is no PIN needed or contacting their bank account. Once you've downloaded the app and registered your details you can start accepting contactless payments in minutes!
          </p>
          <p>
            Discover our next generation of salon point-of-sale technology today.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="page-section">
    <div class="container">
      <h2 class="text-center">
        <?php echo __('Best Solutions'); ?>
      </h2>
      <div class="w-lg-75 m-auto">

        <ul class="list-description row row-cols-md-2">
          <li>Open payment and fiscalization</li>
          <li>An open platform that allows to build and install your own application on smartPOS</li>
          <li>The most advantage solution supporting smartPOS, mPOS, SmartBox in one gateway</li>
          <li>The working interfaces for different processing systems</li>
          <li>Cash register software as an option </li>
        </ul>
      </div>

    </div>
  </div>
  <div class="page-section bg-blue-light-1">
        <div class="row flex-row-reverse">
          <div class="col-md-4 col-lg-6"></div>
        </div>
  </div>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
