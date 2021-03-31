<?php

/**
 * Paymob Theme Customizer
 *
 * @package Paymobymob
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function paymob_customize_register($wp_customize)
{
	$wp_customize->get_setting('blogname')->transport         = 'postMessage';
	$wp_customize->get_setting('blogdescription')->transport  = 'postMessage';
	$wp_customize->get_setting('header_textcolor')->transport = 'postMessage';

	// $wp_customize->add_section('paymob_footer', array(
	// 	'title' => __('Footer'),
	// 	'description' => '',
	// 	'priority' => 40,
	// ));
	// $wp_customize->add_setting('paymob_footer_logo', array());
	

	$wp_customize->add_section( 'paymob_footer_section' , array(
        'title'      => __( 'Footer', 'mytheme' ),
        'priority'   => 30,
    ));
    $wp_customize->add_setting( 'paymob_company-name', array());
	$wp_customize->add_control(new WP_Customize_Image_Control(
		$wp_customize,
		'paymob_company_control',
		array(
			'label' => __( 'Footer Logo', 'paymob' ),
			'section' => 'title_tagline',
			'settings' => 'paymob_company-name',
			'priority' => 1
		)
	));

	$wp_customize->add_section( 'paymob_footer_section' , array(
        'title'      => __( 'Footer', 'paymob' ),
        'priority'   => 30,
    ));
    $wp_customize->add_setting( 'paymob_company-logo', array());
	$wp_customize->add_control(new WP_Customize_Image_Control(
		$wp_customize,
		'paymob_company-logo_control',
		array(
			'label' => __( 'Footer Logo', 'paymob' ),
			'section' => 'title_tagline',
			'settings' => 'paymob_company-logo',
			'priority' => 1
		)
	));
    $wp_customize->add_setting( 'paymob_company-desc', array());
	$wp_customize->add_control(new WP_Customize_Control(
		$wp_customize,
		'paymob_company-desc_control',
		array(
			'label' => __( 'Footer Description', 'paymob' ),
			'section' => 'title_tagline',
			'settings' => 'paymob_company-desc',
			'priority' => 1
		)
	));

	if (isset($wp_customize->selective_refresh)) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'paymob_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'paymob_customize_partial_blogdescription',
			)
		);
	}
}
add_action('customize_register', 'paymob_customize_register');

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function paymob_customize_partial_blogname()
{
	bloginfo('name');
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function paymob_customize_partial_blogdescription()
{
	bloginfo('description');
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function paymob_customize_preview_js()
{
	wp_enqueue_script('paymob-customizer', get_template_directory_uri() . '/js/customizer.js', array('customize-preview'), PAYMOB_VERSION, true);
}
add_action('customize_preview_init', 'paymob_customize_preview_js');
