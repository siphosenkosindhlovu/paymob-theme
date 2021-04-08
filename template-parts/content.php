<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> class="container">
<header class="page-banner">
		<div class="d-flex flex-column-reverse flex-lg-row-reverse justify-content-between">
			<div class="col-lg-6 d-flex justify-content-start justify-content-lg-end z-index-negative">
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
	</header>
	<div class="entry-content">
		<?php
		the_content();
		?>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
