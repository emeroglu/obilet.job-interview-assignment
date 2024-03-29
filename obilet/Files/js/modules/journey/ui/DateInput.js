﻿$js.compile("DateInput", View, function ($public, $private, $protected, $self) {    

    $protected.override.func.on_key = function () { return "date-input"; };

    $private.field.today = null;
    $private.field.tomorrow = null;

    $private.field.months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    $private.field.days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];    

    $private.void.apply_today = function () {

        let day = $self.today.getDate();
        let month = $self.months[$self.today.getMonth()];
        let year = $self.today.getFullYear();
        let dow = $self.days[$self.today.getDay()];

        let text = day + " " + month + " " + year + " " + dow;

        $self.views.date.views.right.views.bottom.views.text.set_text(text);
        $self.views.date.views.right.views.bottom.views.text.apply();

        $self.views.today.views.text.set_color("white");
        $self.views.today.views.text.apply();

        $self.views.today.select()
            .begin()
                .backgroundColor($theme.color.gray)
            .commit();

        $self.views.tomorrow.views.text.set_color("gray");
        $self.views.tomorrow.views.text.apply();

        $self.views.tomorrow.select()
            .begin()
                .backgroundColor($theme.color.white)
            .commit();

        $data.date = $self.today;

    };

    $private.void.apply_tomorrow = function () {

        let day = $self.tomorrow.getDate();
        let month = $self.months[$self.tomorrow.getMonth()];
        let year = $self.tomorrow.getFullYear();
        let dow = $self.days[$self.tomorrow.getDay()];

        let text = day + " " + month + " " + year + " " + dow;

        $self.views.date.views.right.views.bottom.views.text.set_text(text);
        $self.views.date.views.right.views.bottom.views.text.apply();

        $self.views.today.views.text.set_color("gray");
        $self.views.today.views.text.apply();

        $self.views.today.select()
            .begin()
                .backgroundColor($theme.color.white)
            .commit();

        $self.views.tomorrow.views.text.set_color("white");
        $self.views.tomorrow.views.text.apply();

        $self.views.tomorrow.select()
            .begin()
                .backgroundColor($theme.color.gray)
            .commit();

        $data.date = $self.tomorrow;

    };    

    $protected.override.void.on_construct = function (_views) {

        _views.date = new RelativeLayout();
        _views.date.set_name("date");                

        _views.date.views.left = new RelativeLayout();
        _views.date.views.left.set_name("date_left");

        _views.date.views.left.views.bottom = new AbsoluteLayout();
        _views.date.views.left.views.bottom.set_name("date_left_bottom");

        _views.date.views.right = new RelativeLayout();
        _views.date.views.right.set_name("date_right");

        _views.date.views.right.views.top = new RelativeLayout();
        _views.date.views.right.views.top.set_name("date_right_top");

        _views.date.views.right.views.bottom = new RelativeLayout();
        _views.date.views.right.views.bottom.set_name("date_right_bottom");

        _views.today = new AbsoluteLayout();
        _views.today.set_name("today");

        _views.tomorrow = new AbsoluteLayout();
        _views.tomorrow.set_name("tomorrow");

    };

    $protected.override.void.on_flourish = function (_views) {

        _views.date.views.left.views.bottom.views.icon = new ImageView();
        _views.date.views.left.views.bottom.views.icon.set_name("date_icon");
                       
        _views.date.views.right.views.top.views.header = new TextView();
        _views.date.views.right.views.top.views.header.set_name("date_header");
                       
        _views.date.views.right.views.bottom.views.text = new TextView();
        _views.date.views.right.views.bottom.views.text.set_name("date_text");
        
        _views.today.views.text = new TextView();
        _views.today.views.text.set_name("today_text");
        
        _views.tomorrow.views.text = new TextView();
        _views.tomorrow.views.text.set_name("tomorrow_text");
        
    };

    $protected.override.void.on_feed = function (_views) {

        _views.date.views.left.views.bottom.views.icon.set_src($path.ic_calendar);

        _views.date.views.right.views.top.views.header.set_text("Tarih");
        _views.date.views.right.views.top.views.header.set_family("roboto");
        _views.date.views.right.views.top.views.header.set_align("left");
        _views.date.views.right.views.top.views.header.set_weight("medium");
        _views.date.views.right.views.top.views.header.set_size("smaller");
        _views.date.views.right.views.top.views.header.set_color("blue");

        _views.date.views.right.views.bottom.views.text.set_text("1 Nisan 2019 Pazar");
        _views.date.views.right.views.bottom.views.text.set_family("roboto");
        _views.date.views.right.views.bottom.views.text.set_align("left");
        _views.date.views.right.views.bottom.views.text.set_weight("regular");
        _views.date.views.right.views.bottom.views.text.set_size("small");
        _views.date.views.right.views.bottom.views.text.set_color("gray"); 

        _views.today.views.text.set_text("Bugün");
        _views.today.views.text.set_family("roboto");
        _views.today.views.text.set_align("center");
        _views.today.views.text.set_weight("regular");
        _views.today.views.text.set_size("smallest");
        _views.today.views.text.set_color("white");

        _views.tomorrow.views.text.set_text("Yarın");
        _views.tomorrow.views.text.set_family("roboto");
        _views.tomorrow.views.text.set_align("center");
        _views.tomorrow.views.text.set_weight("regular");
        _views.tomorrow.views.text.set_size("smallest");
        _views.tomorrow.views.text.set_color("gray");

        _views.today.onClick(function () {
            $self.apply_today();
        });

        _views.tomorrow.onClick(function () {
            $self.apply_tomorrow();
        });

    };

    $protected.override.void.on_ready = function (_views, $ready) {

        $self.today = new Date();
        $self.tomorrow = new Date();
        $self.tomorrow.setDate($self.tomorrow.getDate() + 1);        

        $self.apply_tomorrow();

        $ready();

    };

    $protected.extension.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .absolute()
                .sideFull()                
            .save();

        _views.date.select_path()
            .begin()
                .widthCropFromFull(32)
                .height(72)
                .marginHorizontal(16)
                .marginTop(20)
                .backgroundColor($theme.color.white)
                .round(2)
            .save();      

        _views.date.views.left.select_path()
            .begin()
                .width(30)
                .heightFull()
            .save();

        _views.date.views.right.select_path()
            .begin()
                .widthCropFromFull(30)
                .heightFull()
            .save();

        _views.date.views.left.views.bottom.select_path()
            .begin()
                .widthCentered(14)
                .height(14)
                .bottom(22)
                .opacity(0.25)
            .save();

        _views.date.views.right.views.top.select_path()
            .begin()
                .widthFull()
                .height(30)
            .save();

        _views.date.views.right.views.top.views.header.select_path()
            .begin()
                .height(30)
                .textLineHeight(40)
            .save();

        _views.date.views.right.views.bottom.views.text.select_path()
            .begin()
                .height(34)
                .textLineHeight(28)
            .save();

        _views.date.views.right.views.bottom.select_path()
            .begin()
                .widthFull()
                .height(34)
            .save();

        _views.today.select_path()
            .begin()
                .width(54)
                .height(22)
                .round(2)
                .bottom(40)
                .right(24)                
                .border("1px solid " + $theme.color.gray)
            .save();

        _views.tomorrow.select_path()
            .begin()
                .width(54)
                .height(22)
                .round(2)
                .bottom(8)
                .right(24)                
                .border("1px solid " + $theme.color.gray)
            .save();

        _views.today.views.text.select_path()
            .begin()
                .textHeight(22)
            .save();

        _views.tomorrow.views.text.select_path()
            .begin()
                .textHeight(22)
            .save();

    };

});