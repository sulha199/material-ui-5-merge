export default BottomNavigationAction;
/**
 * @uxpindocurl https://mui.com/api/bottom-navigation-action/
 */
declare function BottomNavigationAction(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace BottomNavigationAction {
    namespace propTypes {
        let classes: PropTypes.Requireable<object>;
        let icon: PropTypes.Requireable<"style" | "article" | "code" | "details" | "html" | "input" | "label" | "link" | "map" | "menu" | "output" | "search" | "source" | "title" | "circle" | "filter" | "image" | "pattern" | "polyline" | "stop" | "translate" | "security" | "clear" | "height" | "opacity" | "scale" | "transform" | "visibility" | "animation" | "margin" | "padding" | "key" | "download" | "repeat" | "anchor" | "error" | "info" | "warning" | "mode" | "speed" | "loop" | "list" | "start" | "feed" | "group" | "navigation" | "note" | "radio" | "tab" | "timer" | "email" | "10k" | "10mp" | "11mp" | "123" | "12mp" | "13mp" | "14mp" | "15mp" | "16mp" | "17mp" | "18_up_rating" | "18mp" | "19mp" | "1k" | "1k_plus" | "1x_mobiledata" | "20mp" | "21mp" | "22mp" | "23mp" | "24mp" | "2k" | "2k_plus" | "2mp" | "30fps" | "30fps_select" | "360" | "3d_rotation" | "3g_mobiledata" | "3k" | "3k_plus" | "3mp" | "3p" | "4g_mobiledata" | "4g_plus_mobiledata" | "4k" | "4k_plus" | "4mp" | "5g" | "5k" | "5k_plus" | "5mp" | "60fps" | "60fps_select" | "6_ft_apart" | "6k" | "6k_plus" | "6mp" | "7k" | "7k_plus" | "7mp" | "8k" | "8k_plus" | "8mp" | "9k" | "9k_plus" | "9mp" | "abc" | "ac_unit" | "access_alarm" | "access_alarms" | "access_time" | "access_time_filled" | "accessibility" | "accessibility_new" | "accessible" | "accessible_forward" | "account_balance" | "account_balance_wallet" | "account_box" | "account_circle" | "account_tree" | "ad_units" | "adb" | "add" | "add_a_photo" | "add_alarm" | "add_alert" | "add_box" | "add_business" | "add_call" | "add_card" | "add_chart" | "add_circle" | "add_circle_outline" | "add_comment" | "add_home" | "add_home_work" | "add_ic_call" | "add_link" | "add_location" | "add_location_alt" | "add_moderator" | "add_photo_alternate" | "add_reaction" | "add_road" | "add_shopping_cart" | "add_task" | "add_to_drive" | "add_to_home_screen" | "add_to_photos" | "add_to_queue" | "addchart" | "adf_scanner" | "adjust" | "admin_panel_settings" | "adobe" | "ads_click" | "agriculture" | "air" | "airline_seat_flat" | "airline_seat_flat_angled" | "airline_seat_individual_suite" | "airline_seat_legroom_extra" | "airline_seat_legroom_normal" | "airline_seat_legroom_reduced" | "airline_seat_recline_extra" | "airline_seat_recline_normal" | "airline_stops" | "airlines" | "airplane_ticket" | "airplanemode_active" | "airplanemode_inactive" | "airplanemode_off" | "airplanemode_on" | "airplay" | "airport_shuttle" | "alarm" | "alarm_add" | "alarm_off" | "alarm_on" | "album" | "align_horizontal_center" | "align_horizontal_left" | "align_horizontal_right" | "align_vertical_bottom" | "align_vertical_center" | "align_vertical_top" | "all_inbox" | "all_inclusive" | "all_out" | "alt_route" | "alternate_email" | "amp_stories" | "analytics" | "android" | "announcement" | "aod" | "apartment" | "api" | "app_blocking" | "app_registration" | "app_settings_alt" | "app_shortcut" | "apple" | "approval" | "apps" | "apps_outage" | "architecture" | "archive" | "area_chart" | "arrow_back" | "arrow_back_ios" | "arrow_back_ios_new" | "arrow_circle_down" | "arrow_circle_left" | "arrow_circle_right" | "arrow_circle_up" | "arrow_downward" | "arrow_drop_down" | "arrow_drop_down_circle" | "arrow_drop_up" | "arrow_forward" | "arrow_forward_ios" | "arrow_left" | "arrow_outward" | "arrow_right" | "arrow_right_alt" | "arrow_upward" | "art_track" | "aspect_ratio" | "assessment" | "assignment" | "assignment_ind" | "assignment_late" | "assignment_return" | "assignment_returned" | "assignment_turned_in" | "assist_walker" | "assistant" | "assistant_direction" | "assistant_navigation" | "assistant_photo" | "assured_workload" | "atm" | "attach_email" | "attach_file" | "attach_money" | "attachment" | "attractions" | "attribution" | "audio_file" | "audiotrack" | "auto_awesome" | "auto_awesome_mosaic" | "auto_awesome_motion" | "auto_delete" | "auto_fix_high" | "auto_fix_normal" | "auto_fix_off" | "auto_graph" | "auto_mode" | "auto_stories" | "autofps_select" | "autorenew" | "av_timer" | "baby_changing_station" | "back_hand" | "backpack" | "backspace" | "backup" | "backup_table" | "badge" | "bakery_dining" | "balance" | "balcony" | "ballot" | "bar_chart" | "batch_prediction" | "bathroom" | "bathtub" | "battery_0_bar" | "battery_1_bar" | "battery_2_bar" | "battery_3_bar" | "battery_4_bar" | "battery_5_bar" | "battery_6_bar" | "battery_alert" | "battery_charging_full" | "battery_full" | "battery_saver" | "battery_std" | "battery_unknown" | "beach_access" | "bed" | "bedroom_baby" | "bedroom_child" | "bedroom_parent" | "bedtime" | "bedtime_off" | "beenhere" | "bento" | "bike_scooter" | "biotech" | "blender" | "blind" | "blinds" | "blinds_closed" | "block" | "block_flipped" | "bloodtype" | "bluetooth" | "bluetooth_audio" | "bluetooth_connected" | "bluetooth_disabled" | "bluetooth_drive" | "bluetooth_searching" | "blur_circular" | "blur_linear" | "blur_off" | "blur_on" | "bolt" | "book" | "book_online" | "bookmark" | "bookmark_add" | "bookmark_added" | "bookmark_border" | "bookmark_outline" | "bookmark_remove" | "bookmarks" | "border_all" | "border_bottom" | "border_clear" | "border_color" | "border_horizontal" | "border_inner" | "border_left" | "border_outer" | "border_right" | "border_style" | "border_top" | "border_vertical" | "boy" | "branding_watermark" | "breakfast_dining" | "brightness_1" | "brightness_2" | "brightness_3" | "brightness_4" | "brightness_5" | "brightness_6" | "brightness_7" | "brightness_auto" | "brightness_high" | "brightness_low" | "brightness_medium" | "broadcast_on_home" | "broadcast_on_personal" | "broken_image" | "browse_gallery" | "browser_not_supported" | "browser_updated" | "brunch_dining" | "brush" | "bubble_chart" | "bug_report" | "build" | "build_circle" | "bungalow" | "burst_mode" | "bus_alert" | "business" | "business_center" | "cabin" | "cable" | "cached" | "cake" | "calculate" | "calendar_month" | "calendar_today" | "calendar_view_day" | "calendar_view_month" | "calendar_view_week" | "call" | "call_end" | "call_made" | "call_merge" | "call_missed" | "call_missed_outgoing" | "call_received" | "call_split" | "call_to_action" | "camera" | "camera_alt" | "camera_enhance" | "camera_front" | "camera_indoor" | "camera_outdoor" | "camera_rear" | "camera_roll" | "cameraswitch" | "campaign" | "cancel" | "cancel_presentation" | "cancel_schedule_send" | "candlestick_chart" | "car_crash" | "car_rental" | "car_repair" | "card_giftcard" | "card_membership" | "card_travel" | "carpenter" | "cases" | "casino" | "cast" | "cast_connected" | "cast_for_education" | "castle" | "catching_pokemon" | "category" | "celebration" | "cell_tower" | "cell_wifi" | "center_focus_strong" | "center_focus_weak" | "chair" | "chair_alt" | "chalet" | "change_circle" | "change_history" | "charging_station" | "chat" | "chat_bubble" | "chat_bubble_outline" | "check" | "check_box" | "check_box_outline_blank" | "check_circle" | "check_circle_outline" | "checklist" | "checklist_rtl" | "checkroom" | "chevron_left" | "chevron_right" | "child_care" | "child_friendly" | "chrome_reader_mode" | "church" | "circle_notifications" | "class" | "clean_hands" | "cleaning_services" | "clear_all" | "close" | "close_fullscreen" | "closed_caption" | "closed_caption_disabled" | "closed_caption_off" | "cloud" | "cloud_circle" | "cloud_done" | "cloud_download" | "cloud_off" | "cloud_queue" | "cloud_sync" | "cloud_upload" | "cloudy_snowing" | "co2" | "co_present" | "code_off" | "coffee" | "coffee_maker" | "collections" | "collections_bookmark" | "color_lens" | "colorize" | "comment" | "comment_bank" | "comments_disabled" | "commit" | "commute" | "compare" | "compare_arrows" | "compass_calibration" | "compost" | "compress" | "computer" | "confirmation_num" | "confirmation_number" | "connect_without_contact" | "connected_tv" | "connecting_airports" | "construction" | "contact_emergency" | "contact_mail" | "contact_page" | "contact_phone" | "contact_support" | "contactless" | "contacts" | "content_copy" | "content_cut" | "content_paste" | "content_paste_go" | "content_paste_off" | "content_paste_search" | "contrast" | "control_camera" | "control_point" | "control_point_duplicate" | "cookie" | "copy_all" | "copyright" | "coronavirus" | "corporate_fare" | "cottage" | "countertops" | "create" | "create_new_folder" | "credit_card" | "credit_card_off" | "credit_score" | "crib" | "crisis_alert" | "crop" | "crop_16_9" | "crop_3_2" | "crop_5_4" | "crop_7_5" | "crop_din" | "crop_free" | "crop_landscape" | "crop_original" | "crop_portrait" | "crop_rotate" | "crop_square" | "cruelty_free" | "css" | "currency_bitcoin" | "currency_exchange" | "currency_franc" | "currency_lira" | "currency_pound" | "currency_ruble" | "currency_rupee" | "currency_yen" | "currency_yuan" | "curtains" | "curtains_closed" | "cyclone" | "dangerous" | "dark_mode" | "dashboard" | "dashboard_customize" | "data_array" | "data_exploration" | "data_object" | "data_saver_off" | "data_saver_on" | "data_thresholding" | "data_usage" | "dataset" | "dataset_linked" | "date_range" | "deblur" | "deck" | "dehaze" | "delete" | "delete_forever" | "delete_outline" | "delete_sweep" | "delivery_dining" | "density_large" | "density_medium" | "density_small" | "departure_board" | "description" | "deselect" | "design_services" | "desk" | "desktop_access_disabled" | "desktop_mac" | "desktop_windows" | "developer_board" | "developer_board_off" | "developer_mode" | "device_hub" | "device_thermostat" | "device_unknown" | "devices" | "devices_fold" | "devices_other" | "dialer_sip" | "dialpad" | "diamond" | "difference" | "dining" | "dinner_dining" | "directions" | "directions_bike" | "directions_boat" | "directions_boat_filled" | "directions_bus" | "directions_bus_filled" | "directions_car" | "directions_car_filled" | "directions_ferry" | "directions_off" | "directions_railway" | "directions_railway_filled" | "directions_run" | "directions_subway" | "directions_subway_filled" | "directions_train" | "directions_transit" | "directions_transit_filled" | "directions_walk" | "dirty_lens" | "disabled_by_default" | "disabled_visible" | "disc_full" | "discord" | "discount" | "display_settings" | "diversity_1" | "diversity_2" | "diversity_3" | "dnd_forwardslash" | "dns" | "do_disturb" | "do_disturb_alt" | "do_disturb_off" | "do_disturb_on" | "do_not_disturb" | "do_not_disturb_alt" | "do_not_disturb_off" | "do_not_disturb_on" | "do_not_disturb_on_total_silence" | "do_not_step" | "do_not_touch" | "dock" | "document_scanner" | "domain" | "domain_add" | "domain_disabled" | "domain_verification" | "done" | "done_all" | "done_outline" | "donut_large" | "donut_small" | "door_back" | "door_front" | "door_sliding" | "doorbell" | "double_arrow" | "downhill_skiing" | "download_done" | "download_for_offline" | "downloading" | "drafts" | "drag_handle" | "drag_indicator" | "draw" | "drive_eta" | "drive_file_move" | "drive_file_move_outline" | "drive_file_move_rtl" | "drive_file_rename_outline" | "drive_folder_upload" | "dry" | "dry_cleaning" | "duo" | "dvr" | "dynamic_feed" | "dynamic_form" | "e_mobiledata" | "earbuds" | "earbuds_battery" | "east" | "eco" | "edgesensor_high" | "edgesensor_low" | "edit" | "edit_attributes" | "edit_calendar" | "edit_location" | "edit_location_alt" | "edit_note" | "edit_notifications" | "edit_off" | "edit_road" | "egg" | "egg_alt" | "eject" | "elderly" | "elderly_woman" | "electric_bike" | "electric_bolt" | "electric_car" | "electric_meter" | "electric_moped" | "electric_rickshaw" | "electric_scooter" | "electrical_services" | "elevator" | "emergency" | "emergency_recording" | "emergency_share" | "emoji_emotions" | "emoji_events" | "emoji_flags" | "emoji_food_beverage" | "emoji_nature" | "emoji_objects" | "emoji_people" | "emoji_symbols" | "emoji_transportation" | "energy_savings_leaf" | "engineering" | "enhance_photo_translate" | "enhanced_encryption" | "equalizer" | "error_outline" | "escalator" | "escalator_warning" | "euro" | "euro_symbol" | "ev_station" | "event" | "event_available" | "event_busy" | "event_note" | "event_repeat" | "event_seat" | "exit_to_app" | "expand" | "expand_circle_down" | "expand_less" | "expand_more" | "explicit" | "explore" | "explore_off" | "exposure" | "exposure_minus_1" | "exposure_minus_2" | "exposure_neg_1" | "exposure_neg_2" | "exposure_plus_1" | "exposure_plus_2" | "exposure_zero" | "extension" | "extension_off" | "face" | "face_2" | "face_3" | "face_4" | "face_5" | "face_6" | "face_retouching_natural" | "face_retouching_off" | "facebook" | "fact_check" | "factory" | "family_restroom" | "fast_forward" | "fast_rewind" | "fastfood" | "favorite" | "favorite_border" | "favorite_outline" | "fax" | "featured_play_list" | "featured_video" | "feedback" | "female" | "fence" | "festival" | "fiber_dvr" | "fiber_manual_record" | "fiber_new" | "fiber_pin" | "fiber_smart_record" | "file_copy" | "file_download" | "file_download_done" | "file_download_off" | "file_open" | "file_present" | "file_upload" | "filter_1" | "filter_2" | "filter_3" | "filter_4" | "filter_5" | "filter_6" | "filter_7" | "filter_8" | "filter_9" | "filter_9_plus" | "filter_alt" | "filter_alt_off" | "filter_b_and_w" | "filter_center_focus" | "filter_drama" | "filter_frames" | "filter_hdr" | "filter_list" | "filter_list_alt" | "filter_list_off" | "filter_none" | "filter_tilt_shift" | "filter_vintage" | "find_in_page" | "find_replace" | "fingerprint" | "fire_extinguisher" | "fire_hydrant" | "fire_hydrant_alt" | "fire_truck" | "fireplace" | "first_page" | "fit_screen" | "fitbit" | "fitness_center" | "flag" | "flag_circle" | "flaky" | "flare" | "flash_auto" | "flash_off" | "flash_on" | "flashlight_off" | "flashlight_on" | "flatware" | "flight" | "flight_class" | "flight_land" | "flight_takeoff" | "flip" | "flip_camera_android" | "flip_camera_ios" | "flip_to_back" | "flip_to_front" | "flood" | "flourescent" | "flutter_dash" | "fmd_bad" | "fmd_good" | "foggy" | "folder" | "folder_copy" | "folder_delete" | "folder_off" | "folder_open" | "folder_shared" | "folder_special" | "folder_zip" | "follow_the_signs" | "font_download" | "font_download_off" | "food_bank" | "forest" | "fork_left" | "fork_right" | "format_align_center" | "format_align_justify" | "format_align_left" | "format_align_right" | "format_bold" | "format_clear" | "format_color_fill" | "format_color_reset" | "format_color_text" | "format_indent_decrease" | "format_indent_increase" | "format_italic" | "format_line_spacing" | "format_list_bulleted" | "format_list_numbered" | "format_list_numbered_rtl" | "format_overline" | "format_paint" | "format_quote" | "format_shapes" | "format_size" | "format_strikethrough" | "format_textdirection_l_to_r" | "format_textdirection_r_to_l" | "format_underline" | "format_underlined" | "fort" | "forum" | "forward" | "forward_10" | "forward_30" | "forward_5" | "forward_to_inbox" | "foundation" | "free_breakfast" | "free_cancellation" | "front_hand" | "fullscreen" | "fullscreen_exit" | "functions" | "g_mobiledata" | "g_translate" | "gamepad" | "games" | "garage" | "gas_meter" | "gavel" | "generating_tokens" | "gesture" | "get_app" | "gif" | "gif_box" | "girl" | "gite" | "goat 1" | "golf_course" | "gpp_bad" | "gpp_good" | "gpp_maybe" | "gps_fixed" | "gps_not_fixed" | "gps_off" | "grade" | "gradient" | "grading" | "grain" | "graphic_eq" | "grass" | "grid_3x3" | "grid_4x4" | "grid_goldenratio" | "grid_off" | "grid_on" | "grid_view" | "group_add" | "group_off" | "group_remove" | "group_work" | "groups" | "groups_2" | "groups_3" | "h_mobiledata" | "h_plus_mobiledata" | "hail" | "handshake" | "handyman" | "hardware" | "hd" | "hdr_auto" | "hdr_auto_select" | "hdr_enhanced_select" | "hdr_off" | "hdr_off_select" | "hdr_on" | "hdr_on_select" | "hdr_plus" | "hdr_strong" | "hdr_weak" | "headphones" | "headphones_battery" | "headset" | "headset_mic" | "headset_off" | "healing" | "health_and_safety" | "hearing" | "hearing_disabled" | "heart_broken" | "heat_pump" | "help" | "help_center" | "help_outline" | "hevc" | "hexagon" | "hide_image" | "hide_source" | "high_quality" | "highlight" | "highlight_alt" | "highlight_off" | "highlight_remove" | "hiking" | "history" | "history_edu" | "history_toggle_off" | "hive" | "hls" | "hls_off" | "holiday_village" | "home" | "home_filled" | "home_max" | "home_mini" | "home_repair_service" | "home_work" | "horizontal_distribute" | "horizontal_rule" | "horizontal_split" | "hot_tub" | "hotel" | "hotel_class" | "hourglass_bottom" | "hourglass_disabled" | "hourglass_empty" | "hourglass_full" | "hourglass_top" | "house" | "house_siding" | "houseboat" | "how_to_reg" | "how_to_vote" | "http" | "https" | "hub" | "hvac" | "ice_skating" | "icecream" | "image_aspect_ratio" | "image_not_supported" | "image_search" | "imagesearch_roller" | "import_contacts" | "import_export" | "important_devices" | "inbox" | "incomplete_circle" | "indeterminate_check_box" | "info_outline" | "insert_chart" | "insert_chart_outlined" | "insert_comment" | "insert_drive_file" | "insert_emoticon" | "insert_invitation" | "insert_link" | "insert_page_break" | "insert_photo" | "insights" | "install_desktop" | "install_mobile" | "integration_instructions" | "interests" | "interpreter_mode" | "inventory" | "inventory_2" | "invert_colors" | "invert_colors_off" | "invert_colors_on" | "ios_share" | "iron" | "iso" | "javascript" | "join_full" | "join_inner" | "join_left" | "join_right" | "kayaking" | "kebab_dining" | "key_off" | "keyboard" | "keyboard_alt" | "keyboard_arrow_down" | "keyboard_arrow_left" | "keyboard_arrow_right" | "keyboard_arrow_up" | "keyboard_backspace" | "keyboard_capslock" | "keyboard_command" | "keyboard_command_key" | "keyboard_control" | "keyboard_control_key" | "keyboard_double_arrow_down" | "keyboard_double_arrow_left" | "keyboard_double_arrow_right" | "keyboard_double_arrow_up" | "keyboard_hide" | "keyboard_option" | "keyboard_option_key" | "keyboard_return" | "keyboard_tab" | "keyboard_voice" | "king_bed" | "kitchen" | "kitesurfing" | "label_important" | "label_important_outline" | "label_off" | "label_outline" | "lan" | "landscape" | "landslide" | "language" | "laptop" | "laptop_chromebook" | "laptop_mac" | "laptop_windows" | "last_page" | "launch" | "layers" | "layers_clear" | "leaderboard" | "leak_add" | "leak_remove" | "leave_bags_at_home" | "legend_toggle" | "lens" | "lens_blur" | "library_add" | "library_add_check" | "library_books" | "library_music" | "light" | "light_mode" | "lightbulb" | "lightbulb_circle" | "lightbulb_outline" | "line_axis" | "line_style" | "line_weight" | "linear_scale" | "link_off" | "linked_camera" | "liquor" | "list_alt" | "live_help" | "live_tv" | "living" | "local_activity" | "local_airport" | "local_atm" | "local_attraction" | "local_bar" | "local_cafe" | "local_car_wash" | "local_convenience_store" | "local_dining" | "local_drink" | "local_fire_department" | "local_florist" | "local_gas_station" | "local_grocery_store" | "local_hospital" | "local_hotel" | "local_laundry_service" | "local_library" | "local_mall" | "local_movies" | "local_offer" | "local_parking" | "local_pharmacy" | "local_phone" | "local_pizza" | "local_play" | "local_police" | "local_post_office" | "local_print_shop" | "local_printshop" | "local_restaurant" | "local_see" | "local_shipping" | "local_taxi" | "location_city" | "location_disabled" | "location_history" | "location_off" | "location_on" | "location_pin" | "location_searching" | "lock" | "lock_clock" | "lock_open" | "lock_outline" | "lock_person" | "lock_reset" | "login" | "logo_dev" | "logout" | "looks" | "looks_3" | "looks_4" | "looks_5" | "looks_6" | "looks_one" | "looks_two" | "loupe" | "low_priority" | "loyalty" | "lte_mobiledata" | "lte_plus_mobiledata" | "luggage" | "lunch_dining" | "lyrics" | "macro_off" | "mail" | "mail_lock" | "mail_outline" | "male" | "man" | "man_2" | "man_3" | "man_4" | "manage_accounts" | "manage_history" | "manage_search" | "maps_home_work" | "maps_ugc" | "mark_as_unread" | "mark_chat_read" | "mark_chat_unread" | "mark_email_read" | "mark_email_unread" | "mark_unread_chat_alt" | "markunread" | "markunread_mailbox" | "masks" | "maximize" | "media_bluetooth_off" | "media_bluetooth_on" | "mediation" | "medical_information" | "medical_services" | "medication" | "medication_liquid" | "meeting_room" | "memory" | "menu_book" | "menu_open" | "merge" | "merge_type" | "message" | "messenger" | "messenger_outline" | "mic" | "mic_external_off" | "mic_external_on" | "mic_none" | "mic_off" | "microwave" | "military_tech" | "minimize" | "minor_crash" | "miscellaneous_services" | "missed_video_call" | "mms" | "mobile_friendly" | "mobile_off" | "mobile_screen_share" | "mobiledata_off" | "mode_comment" | "mode_edit" | "mode_edit_outline" | "mode_fan_off" | "mode_night" | "mode_of_travel" | "mode_standby" | "model_training" | "monetization_on" | "money" | "money_off" | "money_off_csred" | "monitor" | "monitor_heart" | "monitor_weight" | "monochrome_photos" | "mood" | "mood_bad" | "moped" | "more" | "more_horiz" | "more_time" | "more_vert" | "mosque" | "motion_photos_auto" | "motion_photos_off" | "motion_photos_on" | "motion_photos_pause" | "motion_photos_paused" | "motorcycle" | "mouse" | "move_down" | "move_to_inbox" | "move_up" | "movie" | "movie_creation" | "movie_filter" | "moving" | "mp" | "multiline_chart" | "multiple_stop" | "multitrack_audio" | "museum" | "music_note" | "music_off" | "music_video" | "my_library_add" | "my_library_books" | "my_library_music" | "my_location" | "nat" | "nature" | "nature_people" | "navigate_before" | "navigate_next" | "near_me" | "near_me_disabled" | "nearby_error" | "nearby_off" | "nest_cam_wired_stand" | "network_cell" | "network_check" | "network_locked" | "network_ping" | "network_wifi" | "network_wifi_1_bar" | "network_wifi_2_bar" | "network_wifi_3_bar" | "new_label" | "new_releases" | "newspaper" | "next_plan" | "next_week" | "nfc" | "night_shelter" | "nightlife" | "nightlight" | "nightlight_round" | "nights_stay" | "no_accounts" | "no_adult_content" | "no_backpack" | "no_cell" | "no_crash" | "no_drinks" | "no_encryption" | "no_encryption_gmailerrorred" | "no_flash" | "no_food" | "no_luggage" | "no_meals" | "no_meals_ouline" | "no_meeting_room" | "no_photography" | "no_sim" | "no_stroller" | "no_transfer" | "noise_aware" | "noise_control_off" | "nordic_walking" | "north" | "north_east" | "north_west" | "not_accessible" | "not_interested" | "not_listed_location" | "not_started" | "note_add" | "note_alt" | "notes" | "notification_add" | "notification_important" | "notifications" | "notifications_active" | "notifications_none" | "notifications_off" | "notifications_on" | "notifications_paused" | "now_wallpaper" | "now_widgets" | "numbers" | "offline_bolt" | "offline_pin" | "offline_share" | "oil_barrel" | "on_device_training" | "ondemand_video" | "online_prediction" | "open_in_browser" | "open_in_full" | "open_in_new" | "open_in_new_off" | "open_with" | "other_houses" | "outbond" | "outbound" | "outbox" | "outdoor_grill" | "outgoing_mail" | "outlet" | "outlined_flag" | "pages" | "pageview" | "paid" | "palette" | "pan_tool" | "pan_tool_alt" | "panorama" | "panorama_fish_eye" | "panorama_fisheye" | "panorama_horizontal" | "panorama_horizontal_select" | "panorama_photosphere" | "panorama_photosphere_select" | "panorama_vertical" | "panorama_vertical_select" | "panorama_wide_angle" | "panorama_wide_angle_select" | "paragliding" | "park" | "party_mode" | "password" | "pause" | "pause_circle" | "pause_circle_filled" | "pause_circle_outline" | "pause_presentation" | "payment" | "payments" | "paypal" | "pedal_bike" | "pending" | "pending_actions" | "pentagon" | "people" | "people_alt" | "people_outline" | "percent" | "perm_camera_mic" | "perm_contact_cal" | "perm_contact_calendar" | "perm_data_setting" | "perm_device_info" | "perm_device_information" | "perm_identity" | "perm_media" | "perm_phone_msg" | "perm_scan_wifi" | "person" | "person_2" | "person_3" | "person_4" | "person_add" | "person_add_alt" | "person_add_alt_1" | "person_add_disabled" | "person_off" | "person_outline" | "person_pin" | "person_pin_circle" | "person_remove" | "person_remove_alt_1" | "person_search" | "personal_injury" | "personal_video" | "pest_control" | "pest_control_rodent" | "pets" | "phishing" | "phone" | "phone_android" | "phone_bluetooth_speaker" | "phone_callback" | "phone_disabled" | "phone_enabled" | "phone_forwarded" | "phone_in_talk" | "phone_iphone" | "phone_locked" | "phone_missed" | "phone_paused" | "phonelink" | "phonelink_erase" | "phonelink_lock" | "phonelink_off" | "phonelink_ring" | "phonelink_setup" | "photo" | "photo_album" | "photo_camera" | "photo_camera_back" | "photo_camera_front" | "photo_filter" | "photo_library" | "photo_size_select_actual" | "photo_size_select_large" | "photo_size_select_small" | "php" | "piano" | "piano_off" | "picture_as_pdf" | "picture_in_picture" | "picture_in_picture_alt" | "pie_chart" | "pie_chart_outline" | "pie_chart_outlined" | "pin" | "pin_drop" | "pin_end" | "pin_invoke" | "pinch" | "pivot_table_chart" | "pix" | "place" | "plagiarism" | "play_arrow" | "play_circle" | "play_circle_fill" | "play_circle_filled" | "play_circle_outline" | "play_disabled" | "play_for_work" | "play_lesson" | "playlist_add" | "playlist_add_check" | "playlist_add_check_circle" | "playlist_add_circle" | "playlist_play" | "playlist_remove" | "plumbing" | "plus_one" | "podcasts" | "point_of_sale" | "policy" | "poll" | "polymer" | "pool" | "portable_wifi_off" | "portrait" | "post_add" | "power" | "power_input" | "power_off" | "power_settings_new" | "precision_manufacturing" | "pregnant_woman" | "present_to_all" | "preview" | "price_change" | "price_check" | "print" | "print_disabled" | "priority_high" | "privacy_tip" | "private_connectivity" | "production_quantity_limits" | "propane" | "propane_tank" | "psychology" | "psychology_alt" | "public" | "public_off" | "publish" | "published_with_changes" | "punch_clock" | "push_pin" | "qr_code" | "qr_code_2" | "qr_code_scanner" | "query_builder" | "query_stats" | "question_answer" | "question_mark" | "queue" | "queue_music" | "queue_play_next" | "quick_contacts_dialer" | "quick_contacts_mail" | "quickreply" | "quiz" | "quora" | "r_mobiledata" | "radar" | "radio_button_checked" | "radio_button_off" | "radio_button_on" | "radio_button_unchecked" | "railway_alert" | "ramen_dining" | "ramp_left" | "ramp_right" | "rate_review" | "raw_off" | "raw_on" | "read_more" | "real_estate_agent" | "receipt" | "receipt_long" | "recent_actors" | "recommend" | "record_voice_over" | "rectangle" | "recycling" | "reddit" | "redeem" | "redo" | "reduce_capacity" | "refresh" | "remember_me" | "remove" | "remove_circle" | "remove_circle_outline" | "remove_done" | "remove_from_queue" | "remove_moderator" | "remove_red_eye" | "remove_road" | "remove_shopping_cart" | "reorder" | "repartition" | "repeat_on" | "repeat_one" | "repeat_one_on" | "replay" | "replay_10" | "replay_30" | "replay_5" | "replay_circle_filled" | "reply" | "reply_all" | "report" | "report_gmailerrorred" | "report_off" | "report_problem" | "request_page" | "request_quote" | "reset_tv" | "restart_alt" | "restaurant" | "restaurant_menu" | "restore" | "restore_from_trash" | "restore_page" | "reviews" | "rice_bowl" | "ring_volume" | "rocket" | "rocket_launch" | "roller_shades" | "roller_shades_closed" | "roller_skating" | "roofing" | "room" | "room_preferences" | "room_service" | "rotate_90_degrees_ccw" | "rotate_90_degrees_cw" | "rotate_left" | "rotate_right" | "roundabout_left" | "roundabout_right" | "rounded_corner" | "route" | "router" | "rowing" | "rss_feed" | "rsvp" | "rtt" | "rule" | "rule_folder" | "run_circle" | "running_with_errors" | "rv_hookup" | "safety_check" | "safety_divider" | "sailing" | "sanitizer" | "satellite" | "satellite_alt" | "save" | "save_alt" | "save_as" | "saved_search" | "savings" | "scanner" | "scatter_plot" | "schedule" | "schedule_send" | "schema" | "school" | "science" | "score" | "scoreboard" | "screen_lock_landscape" | "screen_lock_portrait" | "screen_lock_rotation" | "screen_rotation" | "screen_rotation_alt" | "screen_search_desktop" | "screen_share" | "screenshot" | "screenshot_monitor" | "scuba_diving" | "sd" | "sd_card" | "sd_card_alert" | "sd_storage" | "search_off" | "security_update" | "security_update_good" | "security_update_warning" | "segment" | "select_all" | "self_improvement" | "sell" | "send" | "send_and_archive" | "send_time_extension" | "send_to_mobile" | "sensor_door" | "sensor_occupied" | "sensor_window" | "sensors" | "sensors_off" | "sentiment_dissatisfied" | "sentiment_neutral" | "sentiment_satisfied" | "sentiment_satisfied_alt" | "sentiment_very_dissatisfied" | "sentiment_very_satisfied" | "set_meal" | "settings" | "settings_accessibility" | "settings_applications" | "settings_backup_restore" | "settings_bluetooth" | "settings_brightness" | "settings_cell" | "settings_display" | "settings_ethernet" | "settings_input_antenna" | "settings_input_component" | "settings_input_composite" | "settings_input_hdmi" | "settings_input_svideo" | "settings_overscan" | "settings_phone" | "settings_power" | "settings_remote" | "settings_suggest" | "settings_system_daydream" | "settings_voice" | "severe_cold" | "shape_line" | "share" | "share_arrival_time" | "share_location" | "shield" | "shield_moon" | "shop" | "shop_2" | "shop_two" | "shopify" | "shopping_bag" | "shopping_basket" | "shopping_cart" | "shopping_cart_checkout" | "short_text" | "shortcut" | "show_chart" | "shower" | "shuffle" | "shuffle_on" | "shutter_speed" | "sick" | "sign_language" | "signal_cellular_0_bar" | "signal_cellular_4_bar" | "signal_cellular_alt" | "signal_cellular_alt_1_bar" | "signal_cellular_alt_2_bar" | "signal_cellular_connected_no_internet_0_bar" | "signal_cellular_connected_no_internet_4_bar" | "signal_cellular_no_sim" | "signal_cellular_nodata" | "signal_cellular_null" | "signal_cellular_off" | "signal_wifi_0_bar" | "signal_wifi_4_bar" | "signal_wifi_4_bar_lock" | "signal_wifi_bad" | "signal_wifi_connected_no_internet_4" | "signal_wifi_off" | "signal_wifi_statusbar_4_bar" | "signal_wifi_statusbar_connected_no_internet_4" | "signal_wifi_statusbar_null" | "signpost" | "sim_card" | "sim_card_alert" | "sim_card_download" | "single_bed" | "sip" | "skateboarding" | "skip_next" | "skip_previous" | "sledding" | "slideshow" | "slow_motion_video" | "smart_button" | "smart_display" | "smart_screen" | "smart_toy" | "smartphone" | "smoke_free" | "smoking_rooms" | "sms" | "sms_failed" | "snapchat" | "snippet_folder" | "snooze" | "snowboarding" | "snowing" | "snowmobile" | "snowshoeing" | "soap" | "social_distance" | "solar_power" | "sort" | "sort_by_alpha" | "sos" | "soup_kitchen" | "south" | "south_america" | "south_east" | "south_west" | "spa" | "space_bar" | "space_dashboard" | "spatial_audio" | "spatial_audio_off" | "spatial_tracking" | "speaker" | "speaker_group" | "speaker_notes" | "speaker_notes_off" | "speaker_phone" | "spellcheck" | "splitscreen" | "spoke" | "sports" | "sports_bar" | "sports_baseball" | "sports_basketball" | "sports_cricket" | "sports_esports" | "sports_football" | "sports_golf" | "sports_gymnastics" | "sports_handball" | "sports_hockey" | "sports_kabaddi" | "sports_martial_arts" | "sports_mma" | "sports_motorsports" | "sports_rugby" | "sports_score" | "sports_soccer" | "sports_tennis" | "sports_volleyball" | "square" | "square_foot" | "ssid_chart" | "stacked_bar_chart" | "stacked_line_chart" | "stadium" | "stairs" | "star" | "star_border" | "star_border_purple500" | "star_half" | "star_outline" | "star_purple500" | "star_rate" | "stars" | "stay_current_landscape" | "stay_current_portrait" | "stay_primary_landscape" | "stay_primary_portrait" | "sticky_note_2" | "stop_circle" | "stop_screen_share" | "storage" | "store" | "store_mall_directory" | "storefront" | "storm" | "straight" | "straighten" | "stream" | "streetview" | "strikethrough_s" | "stroller" | "subdirectory_arrow_left" | "subdirectory_arrow_right" | "subject" | "subscript" | "subscriptions" | "subtitles" | "subtitles_off" | "subway" | "summarize" | "sunny" | "sunny_snowing" | "superscript" | "supervised_user_circle" | "supervisor_account" | "support" | "support_agent" | "surfing" | "surround_sound" | "swap_calls" | "swap_horiz" | "swap_horizontal_circle" | "swap_vert" | "swap_vert_circle" | "swap_vertical_circle" | "swipe" | "swipe_down" | "swipe_down_alt" | "swipe_left" | "swipe_left_alt" | "swipe_right" | "swipe_right_alt" | "swipe_up" | "swipe_up_alt" | "swipe_vertical" | "switch_access_shortcut" | "switch_access_shortcut_add" | "switch_account" | "switch_camera" | "switch_left" | "switch_right" | "switch_video" | "synagogue" | "sync" | "sync_alt" | "sync_disabled" | "sync_lock" | "sync_problem" | "system_security_update" | "system_security_update_good" | "system_security_update_warning" | "system_update" | "system_update_alt" | "system_update_tv" | "tab_unselected" | "table_bar" | "table_chart" | "table_restaurant" | "table_rows" | "table_view" | "tablet" | "tablet_android" | "tablet_mac" | "tag" | "tag_faces" | "takeout_dining" | "tap_and_play" | "tapas" | "task" | "task_alt" | "taxi_alert" | "telegram" | "temple_buddhist" | "temple_hindu" | "terminal" | "terrain" | "text_decrease" | "text_fields" | "text_format" | "text_increase" | "text_rotate_up" | "text_rotate_vertical" | "text_rotation_angledown" | "text_rotation_angleup" | "text_rotation_down" | "text_rotation_none" | "text_snippet" | "textsms" | "texture" | "theater_comedy" | "theaters" | "thermostat" | "thermostat_auto" | "thumb_down" | "thumb_down_alt" | "thumb_down_off_alt" | "thumb_up" | "thumb_up_alt" | "thumb_up_off_alt" | "thumbs_up_down" | "thunderstorm" | "tiktok" | "time_to_leave" | "timelapse" | "timeline" | "timer_10" | "timer_10_select" | "timer_3" | "timer_3_select" | "timer_off" | "tips_and_updates" | "tire_repair" | "toc" | "today" | "toggle_off" | "toggle_on" | "token" | "toll" | "tonality" | "topic" | "tornado" | "touch_app" | "tour" | "toys" | "track_changes" | "traffic" | "train" | "tram" | "transcribe" | "transfer_within_a_station" | "transgender" | "transit_enterexit" | "travel_explore" | "trending_down" | "trending_flat" | "trending_neutral" | "trending_up" | "trip_origin" | "troubleshoot" | "try" | "tsunami" | "tty" | "tune" | "tungsten" | "turn_left" | "turn_right" | "turn_sharp_left" | "turn_sharp_right" | "turn_slight_left" | "turn_slight_right" | "turned_in" | "turned_in_not" | "tv" | "tv_off" | "two_wheeler" | "type_specimen" | "u_turn_left" | "u_turn_right" | "umbrella" | "unarchive" | "undo" | "unfold_less" | "unfold_less_double" | "unfold_more" | "unfold_more_double" | "unpublished" | "unsubscribe" | "upcoming" | "update" | "update_disabled" | "upgrade" | "upload" | "upload_file" | "usb" | "usb_off" | "vaccines" | "vape_free" | "vaping_rooms" | "verified" | "verified_user" | "vertical_align_bottom" | "vertical_align_center" | "vertical_align_top" | "vertical_distribute" | "vertical_shades" | "vertical_shades_closed" | "vertical_split" | "vibration" | "video_call" | "video_camera_back" | "video_camera_front" | "video_collection" | "video_file" | "video_label" | "video_library" | "video_settings" | "video_stable" | "videocam" | "videocam_off" | "videogame_asset" | "videogame_asset_off" | "view_agenda" | "view_array" | "view_carousel" | "view_column" | "view_comfortable" | "view_comfy" | "view_comfy_alt" | "view_compact" | "view_compact_alt" | "view_cozy" | "view_day" | "view_headline" | "view_in_ar" | "view_kanban" | "view_list" | "view_module" | "view_quilt" | "view_sidebar" | "view_stream" | "view_timeline" | "view_week" | "vignette" | "villa" | "visibility_off" | "voice_chat" | "voice_over_off" | "voicemail" | "volcano" | "volume_down" | "volume_down_alt" | "volume_mute" | "volume_off" | "volume_up" | "volunteer_activism" | "vpn_key" | "vpn_key_off" | "vpn_lock" | "vrpano" | "wallet" | "wallet_giftcard" | "wallet_membership" | "wallet_travel" | "wallpaper" | "warehouse" | "warning_amber" | "wash" | "watch" | "watch_later" | "watch_off" | "water" | "water_damage" | "water_drop" | "waterfall_chart" | "waves" | "waving_hand" | "wb_auto" | "wb_cloudy" | "wb_incandescent" | "wb_iridescent" | "wb_shade" | "wb_sunny" | "wb_twighlight" | "wb_twilight" | "wc" | "web" | "web_asset" | "web_asset_off" | "web_stories" | "webhook" | "wechat" | "weekend" | "west" | "whatsapp" | "whatshot" | "wheelchair_pickup" | "where_to_vote" | "widgets" | "width_full" | "width_normal" | "width_wide" | "wifi" | "wifi_1_bar" | "wifi_2_bar" | "wifi_calling" | "wifi_calling_3" | "wifi_channel" | "wifi_find" | "wifi_lock" | "wifi_off" | "wifi_password" | "wifi_protected_setup" | "wifi_tethering" | "wifi_tethering_error" | "wifi_tethering_error_rounded" | "wifi_tethering_off" | "wind_power" | "window" | "wine_bar" | "woman" | "woman_2" | "woo_commerce" | "wordpress" | "work" | "work_history" | "work_off" | "work_outline" | "workspace_premium" | "workspaces" | "workspaces_filled" | "workspaces_outline" | "wrap_text" | "wrong_location" | "wysiwyg" | "yard" | "youtube_searched_for" | "zoom_in" | "zoom_in_map" | "zoom_out" | "zoom_out_map">;
        let label: PropTypes.Requireable<string>;
        let showLabel: PropTypes.Requireable<boolean>;
        let value: PropTypes.Requireable<string>;
        let sx: PropTypes.Requireable<object>;
    }
}
import PropTypes from 'prop-types';
