<?php

/**
 * The template for displaying all pages
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
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <header class="page-banner">
        <div class="d-flex flex-column-reverse flex-lg-row-reverse justify-content-between">
          <div class="col-lg-6 d-flex justify-content-start justify-content-lg-end z-index-negative">
            <?php paymob_post_thumbnail(); ?>
          </div>
          <div class="container container-lg-6 my-5 my-lg-14 me-lg-0 d-flex align-items-center">
            <div>

              <?php the_title('<h1>', '</h1>'); ?>
              <?php
              if (get_field('page_subtitle')) :
              ?>
                <p class="text-accent fs-md fw-bold">
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
      </header>
      <section class="container page-section">
        <div class="">
          <h2 class="fs-xl">
            <?php
            echo __("How It Works", "paymob");
            ?>
          </h2>
          <p class="small fw-bold fs-lg">
            3 easy steps
          </p>
        </div>
        <div class="row payment-steps">
          <div class="col-lg-3 step text-center text-lg-left">
            <h3 class="h4"><span class="badge bg-accent step-number">&nbsp;</span></h3>
            <figure>
              <div>
                <img src="<?php echo get_template_directory_uri() . "/dist/images/How it works 1@2x.png" ?>" alt="" class="img-fluid mb-6 mb-lg-8" style="object-fit: contain">
              </div>
              <figcaption>
                Enter the purchase amount
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-3 step text-center text-lg-left">
            <h3 class="h4"><span class="badge bg-accent step-number">&nbsp;</span></h3>
            <figure>
              <div>
                <img src="<?php echo get_template_directory_uri() . "/dist/images/How it works 2@2x.png" ?>" alt="" class="img-fluid mb-6 mb-lg-8" style="object-fit: contain">
              </div>
              <figcaption>
                Tap the customer's card to the back of the device.
              </figcaption>
            </figure>
          </div>
          <div class="col-lg-3 step text-center text-lg-left">
            <h3 class="h4"><span class="badge bg-accent step-number">&nbsp;</span></h3>
            <figure>
              <div>
                <img src="<?php echo get_template_directory_uri() . "/dist/images/How it works 3@2x.png" ?>" alt="" class="img-fluid mb-6 mb-lg-8" style="object-fit: contain">
              </div>
              <figcaption>
                Once payment is approved, get paid.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <div class="container page-section">
        <h2 class="text-center">
          Why Paymob?
        </h2>
        <p class="text-center mb-10">
          Enhance your financial service offering and generate an additional revenue stream using our bespoke payment acceptance solutions.
        </p>
        <div class="row">
          <div class="col-md-4">
            <h3 class="h3 text-black">
              Customisation
            </h3>
            <p>
              Ability to customise your SoftPOS mobile application within our ready-to-go framework.
            </p>
          </div>
          <div class="col-md-4">
            <h3 class="h3 text-black">
              Certified, Safe & Secure
            </h3>
            <p>
              Ability to customise your SoftPOS mobile application within our ready-to-go framework.
            </p>
          </div>
          <div class="col-md-4">
            <h3 class="h3 text-black">
              End-to-end support
            </h3>
            <p>
              Paymob is a Level 1 PCI-DSS certified payment solution, which means partners can feel confident that we ensure the highest level of security, in line with industry standards.
            </p>
          </div>
        </div>
      </div>
      <div class="page-section container">
        <div class="w-lg-50">
          <h2 class="text-navy">
            Explore Paymob's availability
          </h2>
          <p>
            Paymob currently services our network of partners across Europe, North America and Asia. We are working hard to expand our reach to elevate fintech partners and vendors globally.
          </p>
        </div>
        <div class="position-relative">
              <img src="<?php  echo get_template_directory_uri() .'/dist/images/map-full.svg' ?>" alt="Partners Regions" id="map" class="img-fluid has-magnifier">
        </div>
      </div>
    <?php

    the_content();

  endwhile; // End of the loop.
    ?>
    <div class="page-section text-center">
      <button class="btn btn-accent" data-bs-toggle="modal" data-bs-target="#airtable">Get Early Access</button>
    </div>
    </article>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
