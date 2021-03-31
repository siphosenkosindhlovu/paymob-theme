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
				<?php get_sidebar( 'footer' ); ?>
			</div>
		</div>
	</div>
</footer>


<?php wp_footer(); ?>

</body>

</html>