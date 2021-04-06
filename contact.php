<?php

/**
* Template Name: Contact Page
*
* @package WordPress
* @subpackage Twenty_Fourteen
* @since Twenty Fourteen 1.0
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
        <div>

          <?php the_title('<h1 class="text-center">', '</h1>'); ?>
 
        </div>
      </div>
    </header>
    <div class="page-section pt-0 pt-lg-0">
      <div class="container w-lg-75">
        <div class="row shadow rounded-2">
          <div class="p-5 col-md-4 bg-blue-light-1 rounded-2 text-white">
            <h2 class="text-white">
              Contact Details
            </h2>
            <ul class="list-unstyled">
              <li class="mb-5">
                71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ
                <br>
              </li>
              <li class="mb-5">
                +44 7751 471779
                <br>
              </li>
              <li class="mb-5">
                welcome@paymobtech.com
                <br>
              </li>
            </ul>
          </div>
          <div class="p-5 card-body col-md-8">
            <?php the_content() ?>
            <!-- <form>
              <div class="form-group mb-4">
                <label for="contact_name">Name*</label>
                <input type="text" name="name" id="contact_name" class="form-control" placeholder="" aria-describedby="helpId" required>

              </div>
              <div class="form-group mb-4">
                <label for="contact_company_name">Company Name*</label>
                <input type="text" name="company_name" id="contact_company_name" class="form-control" placeholder="" aria-describedby="helpId" required>

              </div>
              <div class="form-group mb-4">
                <label for="contact_email">Email Address*</label>
                <input type="email" name="phone" id="contact_email" class="form-control" placeholder="" aria-describedby="helpId" required>

              </div>
              <div class="form-group mb-4">
                <label for="contact_phone">Phone Number</label>
                <input type="tel" name="phone_number" id="contact_phone" class="form-control" placeholder="" aria-describedby="helpId">

              </div>
              <div class="form-group mb-4">
                <label for="contact_message">Tell us more about your interest</label>
                <textarea class="form-control" name="message" id="contact_message" rows="3"></textarea>
              </div>
              <div class="d-flex justify-content-between form-group">
                <p class="form-text text-muted w-75">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
                <div>
                  <button type="submit" class="btn btn-accent">
                    Submit
                  </button>
                </div>
              </div>
            </form> -->
          </div>
        </div>
      </div>
    </div>

  <?php
  endwhile; // End of the loop.
  ?>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();
