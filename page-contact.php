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
    <div class="page-section pt-0 pt-lg-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6 py-md-22">
            <h1 class="h2">
              Contact us
            </h1>
            <ul class="list-unstyled has-navy-color has-medium-font-size lh-sm">
              <li class="mb-5">
                <div class="d-flex">
                  <i data-feather="map-pin" class="me-4"></i>
                  <div>
                    71-75 Shelton Street,<br />
                    Covent Garden, <br />
                    London, England, <br />
                    WC2H 9JQ
                  </div>
                </div>
                <br>
              </li>
              <li class="mb-5">
                <div class="d-flex">
                  <i data-feather="mail" class="me-4"></i>
                  <div>
                    For general queries contact <br />
                    welcome@paymobtech.com
                  </div>
                </div>
                <br>
              </li>
              <li class="mb-5">
                <div class="d-flex">
                  <i data-feather="mail" class="me-4"></i>
                  <div>
                    For media enquiries contact <br />
                    pr@paymobpos.com
                  </div>
                </div>
                <br>
              </li>
              <li class="mb-5">
                <div class="d-flex">
                  <i data-feather="phone" class="me-4"></i>
                  <div>
                    +44 7751 471779
                  </div>
                </div>
                <br>
              </li>
            </ul>
          </div>
          <div class="card-body col-md-6">
            <ul class="nav nav-pills mb-4" id="myTab" role="tablist">
              <li class="nav-item pe-3" role="presentation">
                <button class="btn btn-primary active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Partnerships</button>
              </li>
              <li class="nav-item pe-3" role="presentation">
                <button class="btn btn-primary" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Small business</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="card py-4">
                  <form class="card-body" action="https://formspree.io/f/mnqlgyqp" method="POST">
                    <div class="mb-6">
                      <label for="company_name" class="visually-hidden">
                        Company Name(required)
                      </label>
                      <input id="company_name" name="Company name" class="form-control" placeholder="Company Name*" required />
                    </div>
                    <div class="mb-6">
                      <label for="country" class="visually-hidden">
                        Country of incorporation(required)
                      </label>
                      <input id="country" name="Country" class="form-control" placeholder="Country of incorporation*" required />
                    </div>
                    <div class="mb-6">
                      <label for="coverage" class="visually-hidden">
                        Countries Served(required)
                      </label>
                      <input id="coverage" name="Coverage" class="form-control" placeholder="Countries Served*" required />
                    </div>
                    <div class="mb-6">
                      <label for="website" class="visually-hidden">
                        Website(required)
                      </label>
                      <input id="website" name="Website" class="form-control" placeholder="Website*" required />
                    </div>
                    <div class="row">
                      <div class="mb-6 col-md-6">
                        <label for="first_name" class="visually-hidden">
                          First Name(required)
                        </label>
                        <input id="first_name" name="First Name" class="form-control" placeholder="First Name*" required />
                      </div>
                      <div class="mb-6 col-md-6">
                        <label for="last_name" class="visually-hidden">
                          Last Name(required)
                        </label>
                        <input id="last_name" name="Last Name" class="form-control" placeholder="Last Name*" required />
                      </div>
                    </div>
                    <div class="mb-6">
                      <label for="email" class="visually-hidden">
                        Contact email address(required)
                      </label>
                      <input id="email" name="email" type="email" class="form-control" placeholder="Contact Email Address*" required />
                    </div>
                    <div class="mb-6">
                      <label for="description" class="visually-hidden">
                        Business description(required)
                      </label>
                      <textarea id="description" name="Business description" class="form-control" placeholder="Business Description*" rows="4" required></textarea>
                    </div>
                    <div class="text-end">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                <div class="text-end fs-sm has-navy-color">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="card py-4">
                  <form class="card-body" action="https://formspree.io/f/xpzkyezg" method="POST">
                    <div class="mb-6">
                      <label for="company_name" class="visually-hidden">
                        Company Name(required)
                      </label>
                      <input id="company_name" name="Company Name" class="form-control" placeholder="Company Name*" required />
                    </div>
                    <div class="row">
                      <div class="mb-6 col-md-6">
                        <label for="country" class="visually-hidden">
                          Country of incorporation(required)
                        </label>
                        <input id="country" name="Country of incorporation" class="form-control" placeholder="Country of incorporation*" required />
                      </div>
                      <div class="mb-6 col-md-6">
                        <label for="number_users" class="visually-hidden">
                          Number of users(required)
                        </label>
                        <input id="number_users" name="# of users" type="number" min=0 step=1 class="form-control" placeholder="Number of users*" required />
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-6 col-md-6">
                        <label for="first_name" class="visually-hidden">
                          First Name(required)
                        </label>
                        <input id="first_name" name="First Name" class="form-control" placeholder="First Name*" required />
                      </div>
                      <div class="mb-6 col-md-6">
                        <label for="last_name" class="visually-hidden">
                          Last Name(required)
                        </label>
                        <input id="last_name" name="Last Name" class="form-control" placeholder="Last Name*" required />
                      </div>
                    </div>
                    <div class="mb-6">
                      <label for="email" class="visually-hidden">
                        Contact email address(required)
                      </label>
                      <input id="email" name="Email" type="email" class="form-control" placeholder="Contact Email Address*" required />
                    </div>
                    <div class="mb-6">
                      <label for="email" class="visually-hidden">
                        Phone Number
                      </label>
                      <input id="email" name="Phone number" type="tel" class="form-control" placeholder="Phone Number" />
                    </div>
                    <div class="mb-6">
                      <label for="description" class="visually-hidden">
                        More info(required)
                      </label>
                      <textarea id="description" name="More info" class="form-control" placeholder="Brief description of your business*" rows="4" required></textarea>
                    </div>
                    <div class="text-end">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                <div class="text-end fs-sm has-navy-color">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
              </div>
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
