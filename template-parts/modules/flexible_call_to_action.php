<?php
$call_to_action = get_sub_field('call_to_action');
foreach ($call_to_action as $btn):
  var_dump($btn);
endforeach;