jQuery(window).on("elementor/frontend/init",(function(){window.elementorFrontend.config.environmentMode.edit&&elementor.channels.editor.on("ekit:editor:be_del_cache_click",(function(e){if(e.$el.hasClass("open"))return!1;var n=e.$el.parents("#elementor-controls").find("[data-setting='behance_user_name']"),r=[];if(n[0].value||r.push("behance_user_name"),r.length>0)return jQuery.each([{key:"behance_user_name",value:"Please give a valid username."}],(function(n,t){-1!=jQuery.inArray(t.key,r)&&e.$el.find(".elementor-control-input-wrapper").append('<div class="alert alert-danger" role="alert">'+t.value+"</div>"),setTimeout((function(){e.$el.find(".alert").fadeOut().remove()}),5e3)})),!1;var t={username:n[0].value};jQuery.ajax({data:t,type:"post",url:window.behance_config.rest_url+"elementskit/v1/behance/del_cache/",beforeSend:function(n){n.setRequestHeader("X-WP-Nonce",behance_config.nonce),e.$el.find(".elementor-control-input-wrapper").append('<div class="alert alert-info" role="alert">Waiting for server response...</div>'),e.$el.addClass("open")},success:function(r){r.success?(n.val(t.username),n.trigger("input"),alert(r.msg)):alert(r.msg),e.$el.removeClass("open")},error:function(e){},complete:function(){e.$el.find(".alert").fadeOut().remove()}})}))})),jQuery(document).ready((function(){jQuery(document).on("click",".load_more_b_feed",(function(e){e.preventDefault();var n=5,r=jQuery(this),t=r.closest("div.ekit-feed-items-wrapper").find(".dno");t.each((function(e,r){n&&(n--,jQuery(r).removeClass("dno").show())})),t.length||r.closest("div").remove()}))}));