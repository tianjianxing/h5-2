window.onload = function(){
	//修改话题
	var topicH4 = document.querySelector('.topic h4');//话题ele
	var topicTxt = document.querySelector('#topicTxt');//话题文本框
	var topicBtn = document.querySelector('#topicBtn');//话题按钮
	topicTxt.focus();
	topicBtn.onclick = function(){
		if(topicBtn.value == "确定"){
			if(topicTxt.value == ''){
				alert("请输入话题内容！");
				topicTxt.focus();
			}else{
				topicH4.textContent = topicTxt.value;
				topicH4.style.display = 'block';
				topicTxt.style.display = 'none';
				topicTxt.value = "";
				topicBtn.value = "编辑话题";
			}
		}else{
			topicH4.style.display = 'none';
			topicTxt.style.display = 'block';
			topicBtn.value = "确定";
			topicTxt.focus();
		}
	}	

	//输入留言，计算字符数
	var area = document.querySelector('.editArea textarea');//多行文本元素
	var charCountEle = document.querySelector('.charCount span');//字符计数span
	area.oninput = function(){
		charCountEle.textContent = this.value.length;
	}


	//删除所有留言
	var removeAllBtn = document.getElementById('removeAll');//删除所有留言按钮
	var article = document.querySelector('article');//article元素
	removeAllBtn.onclick = function(){
		if(article.innerHTML == '暂时没有留言……'){
			alert('暂时没有留言可以删除！');
		}else{
			var isOK = confirm("确认要删除所有留言吗？");
			if(isOK){
				article.innerHTML = '暂时没有留言……';
				msgCountEle.textContent = 0;
			}
		}
	}


	//发布留言
	var subBtn = document.querySelector('.sub input');//发布留言按钮
	var uNameEle = document.getElementById('uName');//发布者姓名文本框
	var msgCountEle = document.querySelector('.msgCount span');//统计留言条数span
	subBtn.onclick = function(){
		if(area.value.length == 0){
			alert("请输入留言内容！");
			area.focus();
		}else if(uNameEle.value.length == 0){
			alert("请输入您的姓名！");
			uNameEle.focus();
		}else{
			var uName = uNameEle.value,
				message = area.value,
				year = new Date().getFullYear(),
				month = new Date().getMonth()+1,
				day = new Date().getDate(),
				hour = new Date().getHours(),
				minute = new Date().getMinutes(),
				second = new Date().getSeconds();

			var msgDiv = document.createElement('div');
			msgDiv.className = 'msg';
			msgDiv.innerHTML = '<div class="from">来自 <b>'+ uName +'</b> 的留言：</div>\
				<div class="content">'+ message +'</div>\
				<div class="foot">\
					<div class="msgTime">发布时间：<span>'+ year +'-'+ month +'-'+ day +' '+ hour +':'+ minute +':'+ second +'</span></div>\
					<div class="edit">\
						<input type="button" class="removeItem" value="删除留言">\
					</div>\
				</div>';
			if(article.innerHTML == '暂时没有留言……'){
				article.innerHTML = "";
			}
			article.insertBefore(msgDiv,article.firstElementChild);
			area.value = "";
			uNameEle.value = "";
			charCountEle.textContent = 0;
			msgCountEle.textContent = article.children.length;
		}
	}

	//删除某条留言
	article.onclick = function(event){
		var srcEle = event.srcElement || event.target;
		if(srcEle.className == 'removeItem'){
			var parentEle = srcEle.parentElement.parentElement.parentElement;
			article.removeChild(parentEle);
			if(article.children.length == 0){
				article.innerHTML = '暂时没有留言……';
			}
			msgCountEle.textContent = article.children.length;
		}
	}
}

