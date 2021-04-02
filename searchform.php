<form class="form-search d-flex" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <div class="input-group border border-light rounded-pill">
    <input class="form-control border-0 rounded-pill" type="search" placeholder="Search" aria-label="Search" aria-describedby="button-search"  value="<?php echo get_search_query(); ?>">
    <button class="btn btn-outline-light border-0 rounded-pill" type="button" id="button-search">
      <img src="<?php echo get_theme_root_uri().'//dist//images//search.svg';?>">
    </button>
  </div>
</form>