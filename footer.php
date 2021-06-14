<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Paymob
 */

?>



<!-- Modal -->
<div class="modal fade" id="hbspt" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
	<div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
					<span aria-hidden="true"></span>
				</button>
			</div>
			<div class="modal-body">
				<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
				<script>
					hbspt.forms.create({
						region: "na1",
						portalId: "9315354",
						formId: "6f697898-d7d9-470f-a8f1-d90238845b54"
					});
				</script>
			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="airtable" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
	<div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
					<span aria-hidden="true"></span>
				</button>
			</div>
			<div class="modal-body p-0">
				<iframe class="airtable-embed rounded-3" src="https://airtable.com/embed/shrnsjYQ1MpLPzE6U?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent;"></iframe>
			</div>
		</div>
	</div>
</div>

<footer class="bg-gray-2 py-8 py-lg-11">
	<div class="container">
		<div class="d-flex flex-wrap flex-lg-nowrap">
			<div class="d-flex flex-column justify-content-between">
				<div>
					<div class="footer-contact-callout text-navy">
						Ready to get started?
					</div>
					<a href="/contact" class="fw-bold text-accent fs-md text-decoration-none">Contact Sales <i class="fas fa-chevron-right"></i></a>
				</div>
				<div class="footer-company-info">
					<div class="mb-5 mt-auto">
						<?php echo the_custom_logo() ?>
					</div>
					<div class="fs-tiny lh-lg">
						<?php echo get_theme_mod('paymob_company-desc') ?>
					</div>
				</div>

			</div>
			<div class="footer-widgets ms-auto flex-wrap flex-lg-nowrap">
				<?php get_sidebar('footer'); ?>
			</div>
		</div>
		<div class="container d-flex justify-content-end">
			<div id="mc_embed_signup" class="newsletter ml-auto">
				<form action="https://kostadu.us20.list-manage.com/subscribe/post?u=2cf9a83db0cea39edd3e3a07b&amp;id=45549b5fed" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate customize-unpreviewable mt-5" target="_blank" novalidate="novalidate">
					<div id="mc_embed_signup_scroll">
						<div class="newsletter-label"><strong>Subscribe</strong> to the Paymob Digest, our weekly newsletter!</div>
						<div class="d-flex bg-white align-items-center bg-white newsletter-input-wrapper">
							<div class="form-group flex-grow-1">
								<label for="mce-EMAIL" class="form-label visually-hidden">Email Address <span class="asterisk">*</span>
								</label>
								<input type="email" value="" name="EMAIL" class="required email form-control-sm border-0 shadow-none bg-transparent" id="mce-EMAIL" aria-required="true">
							</div>
							<button id="mc-embedded-subscribe" class="btn m-0 btn-sm newsletter-subscribe">Subscribe</button>
						</div>
						<div id="mce-responses" class="form-text">
							<div id="mce-error-response" style="display:none"></div>
							<div class="response" id="mce-success-response" style="display:none"></div>
						</div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
						<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2cf9a83db0cea39edd3e3a07b_45549b5fed" tabindex="-1" value=""></div>
					</div>
				</form>
			</div>
			<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
			<script type='text/javascript'>
				(function($) {
					window.fnames = new Array();
					window.ftypes = new Array();
					fnames[0] = 'EMAIL';
					ftypes[0] = 'email';
					fnames[1] = 'FNAME';
					ftypes[1] = 'text';
					fnames[2] = 'LNAME';
					ftypes[2] = 'text';
					fnames[3] = 'ADDRESS';
					ftypes[3] = 'address';
					fnames[4] = 'PHONE';
					ftypes[4] = 'phone';
					fnames[5] = 'MMERGE5';
					ftypes[5] = 'text';
					fnames[6] = 'MMERGE6';
					ftypes[6] = 'url';
				}(jQuery));
				var $mcj = jQuery.noConflict(true);
			</script>
		</div>

	</div>
</footer>


<?php wp_footer(); ?>

</body>

</html>