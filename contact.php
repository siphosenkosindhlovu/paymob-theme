<?php

/**
 * Template Name: Contact Page
 *
 * @package WordPress
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
        <div class="row">
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
          <div class="p-5 col-md-8">
            <ul class="nav nav-pills" id="myTab" role="tablist">
              <li class="nav-item pe-3" role="presentation">
                <button class="btn btn-primary active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Partnerships</button>
              </li>
              <li class="nav-item pe-3" role="presentation">
                <button class="btn btn-primary" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Small business</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">..1.</div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">..2.</div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">..3.</div>
            </div>
            <div class="card py-4">
              <form class="card-body" action="https://formspree.io/f/mnqlgyqp" method="POST">
                <div class="mb-6">
                  <label for="company_name" class="visually-hidden">
                    Company Name(required)
                  </label>
                  <input id="company_name" name="Company name" class="form-control" placeholder="Company Name*" />
                </div>
                <div class="mb-6">
                  <label for="country" class="visually-hidden">
                    Country of incorporation(required)
                  </label>
                  <input id="country" name="Country" class="form-control" placeholder="Country of incorporation*" />
                </div>
                <div class="mb-6">
                  <label for="coverage" class="visually-hidden">
                    Countries Served(required)
                  </label>
                  <input id="coverage" name="Coverage" class="form-control" placeholder="Countries Served*" />
                </div>
                <div class="mb-6">
                  <label for="website" class="visually-hidden">
                    Website(required)
                  </label>
                  <input id="website" name="Website" class="form-control" placeholder="Website*" />
                </div>
                <div class="row">
                  <div class="mb-6 col-md-6">
                    <label for="first_name" class="visually-hidden">
                      First Name(required)
                    </label>
                    <input id="first_name" name="First Name" class="form-control" placeholder="First Name*" />
                  </div>
                  <div class="mb-6 col-md-6">
                    <label for="last_name" class="visually-hidden">
                      Last Name(required)
                    </label>
                    <input id="last_name" name="Last Name" class="form-control" placeholder="Last Name*" />
                  </div>
                </div>
                <div class="mb-6">
                  <label for="email" class="visually-hidden">
                    Contact email address(required)
                  </label>
                  <input id="email" name="email" type="email" class="form-control" placeholder="Contact Email Address*" />
                </div>
                <div class="mb-6">
                  <label for="description" class="visually-hidden">
                    Business description(required)
                  </label>
                  <textarea id="description" name="Business description" class="form-control" placeholder="Business Description*" rows="4"></textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
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
