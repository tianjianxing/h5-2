$(function(){

	//编辑话题
	var topicH4 = $(".topic h4"),
		topicTxt = $("#topicTxt"),
		topicBtn = $("#topicBtn");
	topicBtn.click(function(){
		if($(this).val() == "确定"){
			if(!topicTxt.val()){
				alert("请输入话题！");
				topicTxt.focus();
			}else{
				topicH4.text(topicTxt.val())
					   .css('display','block');
				topicTxt.css('display','none').val("");
				$(this).val("编辑话题");
			}
		}else{
			// topicTxt.css('display','block').focus();
			// topicH4.css('display','none');
			topicTxt.show().focus();
			topicH4.hide();
			$(this).val("确定");
		}
	})

	//输入留言，统计字符数
	var msgs = $(".editArea textarea"),
		charCount = $(".charCount span");
	msgs.on('input',function(){
		charCount.text(msgs.val().length);
	})

	//发布留言
	var submitBtn = $(".sub"),
		uName = $("#uName"),
		article = $("article"),
		msgCount = $(".msgCount span");
	submitBtn.click(function(){
		if(!msgs.val()){
			alert("请输入留言");
			msgs.focus();
		}else if(!uName.val()){
			alert("请输入名字");
			uName.focus();
		}else{
			if(article.text() == "暂时没有留言……"){
				article.empty();
			}
			article.prepend('<div class="msg">\
				<div class="from">来自 <b>'+uName.val()+'</b> 的留言：</div>\
				<div class="content">'+msgs.val()+'</div>\
				<div class="foot">\
					<div class="msgTime">发布时间：<span>'+new Date().toLocaleString()+'</span></div>\
					<div class="edit">\
						<input type="button" class="removeItem" value="删除留言">\
					</div>\
				</div>\
			</div>');
			msgs.val("");
			uName.val("");
			charCount.text(0);
			msgCount.text(article.children().length);
		}
	})

	//删除所有留言
	var removeAllBtn = $("#removeAll");
	removeAllBtn.click(function(){
		if(article.text() == "暂时没有留言……"){
			alert("没有可以删除的留言");
		}else if(confirm("确定要全部删除吗？")){
			article.text("暂时没有留言……");
			msgCount.text(0);
		}
	})

	//删除某条留言
	article.on('click','.removeItem',function(){
		$(this).closest('.msg').remove();
		msgCount.text(article.children().length);
		if(!article.children().length){
			article.text("暂时没有留言……");
		}
	})
})

