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
							<?= the_field('page_subtitle'); ?>
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

		if (have_rows('feature_block')) :
			while (have_rows('feature_block')) : the_row();
				if (get_row_layout() === "key_feature") :
					$features =  get_sub_field("key_feature_inner");
					//var_dump($features);
		?>
					<div class="page-section key-features">
						<div class="container w-lg-75">
							<div class="row align-items-center">
								<div class="col-md-6">
									<h2><?php echo $features['key_feature_heading']; ?></h2>
									<p><?php echo $features['key_feature_desc']; ?></p>
								</div>
								<div class="col-md-6 text-center">
									<img class="img-fluid" src="<?php echo wp_get_attachment_image_url($features['key_feature_img']['ID'], 'medium') ?>" alt="<?php $features['key_feature_img']['alt'] ?>" />
								</div>
							</div>
						</div>
					</div>
					<?php
				endif;
				if ((get_row_layout() == "spec_list") || (get_row_layout() == "specifications_list")) :?>
					<div class="page-section spec_list container"><?php
					$specs = ((get_row_layout() == "spec_list")) ? get_sub_field("spec_items") : get_sub_field("specification_list_items");
					
					?>
					
					<h2 class="w-lg-75">
						<?php 
						echo ($specs['spec_header']) ? $specs['spec_header'] : __("Tech Specs", "paymob"); 
						?>
					</h2>
					<?php
					$specs = $specs['spec_items'] ? $specs['spec_items'] : $specs;
					if ($specs) :?>
						<ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 list-description"> <?php
									foreach ($specs as $spec => $spec_item):
									?>
									<?php $spec = $spec_item['spec_item']; ?>
								<li>
									<dl>
										<dt>
											<?php echo $spec["spec_label"]; ?>
										</dt>
										<dd>
											<?php 
												if ($spec["spec_list"]):
													echo "<ul class='list-unstyled'>";
													foreach ($spec["spec_list"] as $spec_item):
														?>
															<li>
																<?php echo $spec_item['spec_list_item'] ;?>
															</li>
														<?php
													endforeach;
													echo "</ul>";
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
					endif;?>
					</div>
					<?php
				endif;
				if (get_row_layout() == "text_block"):
					$content = get_sub_field("rich_text");
					?>
						<div class="page-section bg-light two-cols">
							<div class="container">
								<?php echo $content; ?>
							</div>
						</div>
					<?php
				endif;
				if (get_row_layout() == "image_block"):
					$content = get_sub_field("image");
					?>
						<div class="page-section bg-light">
							<div class="container points">
								<?php echo $content; ?>
							</div>
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