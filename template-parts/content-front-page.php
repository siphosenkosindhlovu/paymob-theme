<?php

/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

?>
<?php
if (have_posts()) :
  /* Start the Loop */
  while (have_posts()) :
    the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <section class="page-banner page-banner-front-page">
        <div class="d-flex flex-column flex-lg-row-reverse justify-content-between">
          <div class="col-lg-6 d-flex justify-content-end z-index-negative">
            <?php paymob_post_thumbnail(); ?>
          </div>
          <div class="container-lg-1 m-0 p-0"></div>
          <div class="container container-lg-5 my-5 my-lg-14 me-lg-0 d-flex align-items-center">
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
      </section>
  <?php endwhile;
endif;
wp_reset_query();

  ?>
  <section class="container page-section">


   </section>
  <section class="container page-section">
    <div class="row">
      <h2 class="col-lg-5 mb-lg-29 fs-xl">
        <?php
        echo __("Accept payments as easy as 1-2-3", "paymob");
        ?>
      </h2>
    </div>
    <div class="row payment-steps">
      <?php
      $args = array(
        'post_type' => 'steps',
        'orderby' => 'ID',
        'order' => 'ASC'
      );
      $steps = new WP_Query($args);
      if ($steps->have_posts()) :
        while ($steps->have_posts()) :
          $steps->the_post();
      ?>
          <div class="col-lg-3 step text-center text-lg-left">
            <h3 class="h4"><span class="badge bg-accent step-number">&nbsp;</span></h3>
            <figure>
              <div class="ratio ratio-1x1">
                <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="" class="img-fluid mb-6 mb-lg-8" style="object-fit: contain">
              </div>
              <figcaption>
                <?php the_content(); ?>
              </figcaption>
            </figure>
          </div>
      <?php
        endwhile;
      endif;
      wp_reset_query();
      ?>

      <!-- <div class="col-lg-3">
        <h3 class="h4"><span class="badge bg-accent">2</span></h3>
        <figure>
          <img src="./images/payment-step-2.png" alt="" class="img-fluid mb-6 mb-lg-8">
          <figcaption>
            Tap the card, smartphone or wearable device to the NFC reader's field of the mPOS device
          </figcaption>
        </figure>
      </div>
      <div class="col-lg-3">
        <h3 class="h4"><span class="badge bg-accent">3</span></h3>
        <figure>
          <img src="./images/payment-step-3.png" alt="" class="img-fluid mb-6 mb-lg-8">
          <figcaption>
            When payment is authorised, sounds and haptic are played
          </figcaption>
        </figure>
      </div>
    </div> -->
  </section>



  <section class="bg-navy page-section">
    <div class="container">
      <div class="mb-4 mb-lg-22 row justify-content-center">
        <div class="col-lg-8">
          <h2 class="text-accent text-center fs-xl">
            Examples of Common Contacless Payment Points
          </h2>
          <p class="text-light text-center">
            As the use of contactless and alternative transaction methods is growing, in the future it will be possible
            for certain groups of merchants to refuse completely from the terminals of individual mobile devices and
            assign functions to read contactless cards to mobile devices. Currently suitable for Visa and Mastercard
            across the UK and Europe. 
          </p>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <?php
        $args = array(
          'post_type' => 'payment_points',
          'orderby' => 'date',
          'order' => 'ASC',
        );
        $payment_points = new WP_Query($args);
        if ($payment_points->have_posts()) :
          while ($payment_points->have_posts()) :
            $payment_points->the_post();
        ?>
            <div class="col">
              <button class="btn card rounded-3 p-0 <?php the_field('header_color_class'); ?> ratio ratio-1x1 mb-5" data-bs-toggle="modal" data-bs-target="#post-<?php the_ID() ?>" style="border: 4px dashed rgba(255, 255, 255, 0.5);">

                <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="" class="card-img rounded-3" height="160">
                <div class="card-img-overlay d-flex justify-content-center">
                  <div class="text-white fs-5 fw-bold mt-auto">
                    <?php echo str_replace('For', '', get_the_title()); ?>
                  </div>
                </div>
              </button>
            </div>
        <?php
          endwhile;
        endif;
        wp_reset_query();
        ?>
      </div>
  </section>
  <section class="container page-section">
    <div class="mb-4 mb-lg-22 row position-relative">
      <div class="col-lg-6 position-lg-absolute">
        <h2 class="fs-xl">
          How does transaction flow work?
        </h2>
        <p class="w-md-75">
          Interoperable Acceptance via Terminals- Mobile phone will send he transaction to acquirer's back-end which in
          turn route the transaction to the network based on the card.
        </p>
      </div>
      <div class="col-lg-9 offset-lg-3">
        <img src="<?php echo get_template_directory_uri() . "/dist/images/How does transaction work flow.svg" ?>'" alt="" class="img-fluid">
      </div>
  </section>
  <section class="container-fluid bg-blue-light-1 page-section">
    <h2 class="fs-lg text-white text-center">
      Paymob Mobile App
    </h2>
    <p class="fs-2md text-white text-center">
      Demo video by Paymob
    </p>
    <div class="container">
      <div class="w-md-75 mx-auto">

        <div class="embed mb-3">
        <iframe width="932" height="524" src="https://www.youtube.com/embed/F-kaKEtbRpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
      </div>
    </div>
    <div class="text-center">
      <a href="#" class="btn btn-accent">Request Demo</a>
    </div>
  </section>
  <section class="container page-section">
    <h2 class="w-lg-50 fs-xl">
      <?php echo __('Frequently Asked Questions', 'paymob'); ?>
    </h2>
    <div class="row">
      <div class="col-lg-6">

        <div class="accordion accordion-flush accordion-faqs" id="accordionFlushExample">
          <?php
          $args = array(
            'post_type' => 'faqs',
            'suppress_filters' => 'true'
          );
          $faqs = new WP_Query($args);
          if ($faqs->have_posts()) :
            while ($faqs->have_posts()) :
              $faqs->the_post();
          ?>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-<?php the_ID(); ?>" aria-expanded="false" aria-controls="flush-collapseOne">
                    <?php the_title(); ?>
                  </button>
                </h2>
                <div id="faq-<?php the_ID(); ?>" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"><?php the_content(); ?></div>
                </div>
              </div>
          <?php
            endwhile;
          endif;
          wp_reset_query();
          ?>
        </div>

      </div>
      <div class="col-lg-6">
        <img src='<?php echo get_template_directory_uri() . "/dist/images/Contact your acquirer with more questions.svg" ?>' class="img-fluid">
      </div>
    </div>
  </section>
    </article><!--  -->

    <!-- Button trigger modal -->
    <?php
    $args = array(
      'post_type' => 'payment_points',
    );
    $payment_points = new WP_Query($args);
    if ($payment_points->have_posts()) :
      while ($payment_points->have_posts()) :
        $payment_points->the_post();
    ?>
        <!-- Modal -->
        <div class="modal fade" id="post-<?php the_ID() ?>" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header text-center text-md-left d-flex flex-column flex-md-row justify-content-between <?php the_field('header_color_class'); ?>">
                <h1 class="modal-title"><?php the_title(); ?></h1>
                <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="" height="160">
                <button type="button" class="close modal-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body points">
                <?php the_content(); ?>
              </div>
            </div>
          </div>
        </div>
    <?php
      endwhile;
    endif;
    wp_reset_query();
    ?>
