<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Paymob
 */

get_header();
?>

<main id="primary" class="site-main container">

	<?php
	while (have_posts()) :
		the_post();
	?>
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<header class="page-banner page-section text-center">
				<div class="w-lg-75 mx-auto mb-10 mb-lg-14">
					<h1 class="article-title">
						<?php the_title(); ?>
					</h1>
					<div class="d-flex justify-content-center align-items-center">
						<div class="ms-4">
							<div>
								<?php the_date('F j, Y'); ?>
							</div>
						</div>
					</div>
				</div>
				<div>
					<?php the_post_thumbnail('full', array('class' => 'img-fluid')); ?>
				</div>
			</header>
			<div class="entry-content mx-auto w-lg-75">
				<?php
				the_content();
				?>
			</div><!-- .entry-content -->

		</article><!-- #post-<?php the_ID(); ?> -->
	<?php
		// get_template_part('template-parts/content', get_post_type());

		// // If comments are open or we have at least one comment, load up the comment template.
		// if (comments_open() || get_comments_number()) :
		// 	comments_template();
		// endif;

	endwhile; // End of the loop.
	?>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();
