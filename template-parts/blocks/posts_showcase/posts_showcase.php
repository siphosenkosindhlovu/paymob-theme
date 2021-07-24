<?php 
$posts = get_field('posts');
  //var_dump($posts);
  echo(get_the_post_thumbnail_url($posts[0]));