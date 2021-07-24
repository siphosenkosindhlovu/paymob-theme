<?php

/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @packagepaymob_
 */

get_header();
?>

<main id="primary" class="site-main container	">

	<?php if (have_posts()) : ?>

		<header class="page-banner mb-10 mb-lg-14">
			<div class="my-5 my-lg-14">
				<div>
					<h1 class="page-title">
						<?php
							if (is_category("news")):
								echo  __('Paymob News', 'paymob') ;
							else:
								post_type_archive_title();
								the_archive_title();
							endif;?>
					</h1>
				</div>
			</div>
		</header>
		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
		<?php
		/* Start the Loop */
		while (have_posts()) :
			the_post();

			/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
		?>

				<?php
				get_template_part('template-parts/content', get_post_type());
				?>
	<?php
		endwhile;
		
		the_posts_navigation();
		
		else :
			
			get_template_part('template-parts/content', 'none');
			
		endif;
		?>
		</div>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
