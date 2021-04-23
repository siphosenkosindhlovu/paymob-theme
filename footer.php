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
		<div class="d-flex flex-wrap flex-lg-nowrap">
			<div class="mb-6">
				<div class="mb-5 mb-lg-17">
					<img src="<?php echo get_theme_mod('paymob_company-logo') ?>" alt="" class="img-fluid">
				</div>
				<div class="fs-tiny text-white lh-lg w-77ch">
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