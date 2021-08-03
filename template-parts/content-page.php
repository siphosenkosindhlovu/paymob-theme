<?php

/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Paymob
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">
		<?php
		the_content();

		if (have_rows('feature_block')) :
			while (have_rows('feature_block')) : the_row();
				if ((get_row_layout() == "spec_list") || (get_row_layout() == "specifications_list")) : ?>
					<div class="page-section spec_list container">
						<?php
						$specs = ((get_row_layout() == "spec_list")) ? get_sub_field("spec_items") : get_sub_field("specification_list_items");
						?>

						<h2 class="w-lg-75">
							<?php
							echo ($specs['spec_header']) ? $specs['spec_header'] : __("Tech Specs", "paymob");
							?>
						</h2>
						<?php
						$specs = $specs['spec_items'] ? $specs['spec_items'] : $specs;
						if ($specs) : ?>
							<ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 description-list"> 
								<?php
									foreach ($specs as $spec => $spec_item) :
								?>
									<?php $spec = $spec_item['spec_item']; ?>
									<li>
										<dl>
											<dt>
												<?php echo $spec["spec_label"]; ?>
											</dt>
											<dd>
												<?php
														if ($spec["spec_list"]) :
														echo "<div>";
														foreach ($spec["spec_list"] as $spec_item) :
												?>
																<?php echo $spec_item['spec_list_item']; ?>
														</br>
												<?php	endforeach;
														echo "</div>";
														endif;
							?>
										</dd>
									</dl>
								</li>
						<?php
																																												endforeach;
						?>
							</ul>
						<?php
						endif; ?>
					</div>
				<?php
				endif;
			endwhile;
		endif;

		$case_studies = get_field("case_study");
		if ($case_studies) :
			foreach ($case_studies as $post) :
				setup_postdata($post);
				?>
				<article class="bg-light page-section">
					<header class="page-banner">
						<div class="container d-flex align-items-center">
							<div>
								<h2><?php echo __('Case Study', 'paymob'); ?></h2>
								<?php the_title('<h3 class="h3 text-accent">', '</h3>'); ?>
							</div>
						</div>
					</header>

					<div class="entry-content container">
						<?php
						the_content();
						?>
					</div><!-- .entry-content -->

					<?php if (get_edit_post_link()) : ?>
						<footer class="entry-footer">
							<?php
							edit_post_link(
								sprintf(
									wp_kses(
										/* translators: %s: Name of current post. Only visible to screen readers */
										__('Edit <span class="screen-reader-text">%s</span>', 'paymob'),
										array(
											'span' => array(
												'class' => array(),
											),
										)
									),
									wp_kses_post(get_the_title())
								),
								'<span class="edit-link">',
								'</span>'
							);
							?>
						</footer><!-- .entry-footer -->
					<?php endif; ?>
				</article><!-- #post-<?php the_ID(); ?> -->
		<?php
			endforeach;
		endif; ?>
	</div><!-- .entry-content -->

	<?php if (get_edit_post_link()) : ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers */
						__('Edit <span class="screen-reader-text">%s</span>', 'paymob'),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post(get_the_title())
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->