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

<footer class="bg-primary py-8 py-lg-11">
	<div class="container">
		<!-- Begin Mailchimp Signup Form -->
		<style type="text/css">

			/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
		</style>
		<div id="mc_embed_signup">
			<form action="https://kostadu.us20.list-manage.com/subscribe/post?u=2cf9a83db0cea39edd3e3a07b&amp;id=45549b5fed" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
				<div id="mc_embed_signup_scroll">
					<h2>Subscribe</h2>
					<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
					<div class="mc-field-group">
						<label for="mce-EMAIL" class="form-label">Email Address <span class="asterisk">*</span>
						</label>
						<input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL">
					</div>
					<div id="mce-responses" class="clear">
						<div id="mce-error-response" style="display:none"></div>
						<div class="response" id="mce-success-response" style="display:none"></div>
					</div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
					<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2cf9a83db0cea39edd3e3a07b_45549b5fed" tabindex="-1" value=""></div>
					<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
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
		<!--End mc_embed_signup-->
		<div class="d-flex flex-wrap flex-lg-nowrap">
			<div class="mb-6">
				<div class="mb-5 mb-lg-17">
					<img src="<?php echo get_theme_mod('paymob_company-logo') ?>" alt="" class="img-fluid">
				</div>
				<div class="fs-tiny text-white lh-lg w-md-77ch">
					<?php echo get_theme_mod('paymob_company-desc') ?>
				</div>
			</div>
			<div class="footer-widgets ms-auto flex-wrap flex-lg-nowrap">
				<?php get_sidebar('footer'); ?>
			</div>
		</div>
	</div>
</footer>


<?php wp_footer(); ?>

</body>

</html>