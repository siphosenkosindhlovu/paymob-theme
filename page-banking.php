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
  ?>
  <section class="page-section bg-light">
    <div class="container text-center">
      <h2 class="mb-3"><?php echo __('Paymob Solutions'); ?> </h2>
      <p class="fs-2md mb-10 mb-xl-22"> <?php echo __('On-land Payment Infrastructure Solutions') ?></p>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 colored-showcase">

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
              <a href="<?php the_permalink(); ?>" class="btn card d-block item rounded-3 mb-4 <?php the_field('header_color_class'); ?> ratio ratio-16x9">
                <div class="rounded-3 d-flex justify-content-center align-items-center">
                  <div class="highlighted fs-5 fw-bold mb-6">
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
  <?php
  $features = get_field('features', $post_ID);
  if ($features) : ?>
    <div class="page-section">
      <div class="container">
        <div class="row justify-content-between row-cols-md-4">
          <?php
          foreach ($features as $feature) :
          ?>
            <div class="text-center px-10 px-lg-6 mb-8">
              <img src="<?php echo $feature['image']['url']; ?>" alt="<?php echo $feature['image']['alt']; ?>" class="img-fluid mb-4">
              <h3 class="mb-2 text-accent fs-2md"><?php echo ($feature['title']); ?></h3>
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
  <?php endif; ?>
  <div class="page-section bg-navy">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-6">
          <img class="img-fluid" src="<?php paymob_theme_image_src('/dist/images/Why-choose-Paymob.svg');?>" aria-hidden>
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
  <div class="page-section bg-navy">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 col-lg-6">
          <img class="img-fluid" src="<?php echo get_template_directory_uri() . '/dist/images/iluminator.svg'; ?>" aria-hidden="true">
        </div>
        <div class="col-md-8 col-lg-6 text-white">
          <ul class="list-description blue-light-markers fs-2md fw-bold medium">
            <li>
              <p>
                Reliable Secure Technology
              </p>
            </li>
            <li>No Hassle In-House Set Up</li>
            <li>24/7 Online Support</li>
            <li>Free Reporting Software</li>
            <li>Fully PCI DSS Compliant</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 p-0">
        <img class="img-fluid" src="<?php paymob_theme_image_src('/dist/images/Yes-we-do-White-Label.jpg'); ?>">
      </div>
      <div class="container-lg-6 page-section ms-lg-0">
        <div class="offset-lg-1 page-section">
          <h2>
            Yes, we do White Label
          </h2>
          <p>
            Paymob offers the most affordable, massively scalable ready-to-use solution to start making money right away with your own logo on it. Backed up with the innovative software and hardware.
          </p>
          <a href="#" data-bs-toggle="modal" data-bs-target="#hbspt" class="text-accent fs-2md fw-bold text-decoration-none">Get In Touch</a>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row flex-row-reverse">
      <div class="col-lg-6 p-0">
        <img class="img-fluid w-100" src="<?php paymob_theme_image_src('/dist/images/Printed-materials.png'); ?>">
      </div>
      <div class="container-lg-6 page-section ms-lg-0">
        <div class="offset-lg-1 page-section">
          <h2>
            Paymob materials
          </h2>
          <?php
          $downloads = get_field('downloads', $post_ID);

          if ($downloads) :
            foreach ($downloads as $download) :
          ?>
              <p>
                <a href="<?php echo $download['url'];?>" class="text-accent fs-2md fw-bold text-decoration-none" download><?php echo $download['label'];?></a>
              </p>
          <?php
            endforeach;
          endif; ?>
        </div>
      </div>
    </div>
  </div>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
