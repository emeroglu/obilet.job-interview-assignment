﻿$js.compile("Button", View, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "button"; };

    $private.field.text = "";
    $public.void.set_text = function (_text) { $self.text = _text; };        

    $public.override.void.apply = function () {

        $self.element.innerHTML = $self.text;      

    };    

    $protected.override.void.on_compile = function () {

        let e = document.createElement($self.tag);
        e.innerHTML = $self.text;

        e.onclick = $self.on_click;

        return e;

    };

    $protected.extension.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .absolute()
                .widthCentered(208)
                .heightCentered(41)
                .backgroundColor($theme.color.blue)
                .textColor($theme.color.white)
                .textMedium()
                .textCenter()
                .textLineHeight(41)
                .textSize(17)
                .round(4)
            .save();

    };

});