<?php

class Bm_Plugin {

    private static $instance = null;
    

    public static function get_instance() { 
        if ( null == self::$instance ) {
            self::$instance = new self;
           

        }
        return self::$instance;
    } 
 
    
    private function __construct() {
        add_action( 'admin_init', array($this, 'bm_plugin_initialize') );
        
        

    } 

    



    function bm_plugin_initialize(){
        add_action( 'admin_enqueue_scripts', array( $this,'include_style_files' ));
    }

    function bm_include_style_files() {
        wp_enqueue_style( 'humex', plugins_url('css/style.css', __FILE__));
    }

    function bm_enqueue_scripts_files() {
        wp_enqueue_scripts( 'humex', plugins_url('js/bundle.js', __FILE__));
    }
    function bm_create(){
        add_action( 'admin_menu', array($this, 'bm_create_admin_menu_page' ) );
    }


    function bm_create_admin_menu_page(){    
        add_menu_page("bm plugin Options Page","bm   Options",'manage_options',"bm-plugin-options",array($this,"bm_plugin_options_page"));
    }


    function bm_plugin_options_page(){
        include 'bm_plugin_options_page.php';
    }

}



$bm_plugin = Bm_Plugin::get_instance();
$bm_plugin->bm_create();

?>


