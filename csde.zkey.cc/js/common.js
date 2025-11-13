/**
 * Created by Administrator on 2018/4/12.
 */

/* var ProjectID = '2018050321032147160225693467';
var QuesID = '2018050417003377973756948164';

var QuesIDSelf = '2018062612392435548660017664' */

//线上
var ProjectID = '2018050417543415508563919529';
var QuesID = '2018050418295695733931916048';
var QuesIDSelf = '2018050418190627095827462159'
var VarName = GetUrlVarValue("VarName");
var QuesIDt = GetUrlVarValue("QuesID");
var Vname = GetUrlVarValue("Vname");
var VariableIDs = GetUrlVarValue("VariableID");
// var userUrl = "http://user.zkey.com/";
//var userUrl = "http://192.168.2.141:57511/";
// var userUrls = "http://192.168.2.141:57511/";
var userUrl = "https://users.zkey.cc/";
var userUrls = "https://users.zkey.cc/";
// var formalurl = "http://192.168.2.137:8001/";
// var formalurls = "http://192.168.2.137:8001/";
var formalurl = "https://pyapi.zkey.cc:8002/";
var formalurls = "https://pyapi.zkey.cc:8002/"
//�û�����
//获取用户信息
var UserInfo = userUrl + "api/User/UserInfo";
var Login = userUrl + "api/Login/LoginSubmit";
//�û��˳���¼
var LoginOut = userUrl + "api/Login/LoginOut";
//��ȡ��������
var GetSampleInfo = userUrls + "api/UserTeam/GetSampleInfo";
var GetSampleInfoMax = userUrl + "api/UserTeam/GetSampleInfoMax";
//��ȡ��Ŀ��
var GetUserTeam = userUrls + "api/UserTeam/GetUserTeam";
//获取变量限制
var GetVariableInfo = userUrls + "api/UserTeam/GetVariableInfo";

var CatSubProjectAPI = formalurls + "CatSubProject";
//进度管理
var ShowWorkProgressMessageReturnData = formalurl + "ShowWorkProgressMessageReturnData";

var CatQuestAPI = formalurls + "CatQuest";
var CatSubQuestAPI = formalurls + "CatSubQuest";
var CatSubVableAPI = formalurls + "CatSubVariable";

//版本
var ShowQuesVariableVersionHandler = formalurl + "ShowQuesVariableVersionHandler"
//查看单个项目下所有数据集
var ShowAllQuestAPI = formalurl + "ShowAllQues";
//查看单个数据集基本信息
var ShowSimpleQuesBaseInfoAPI = formalurl + "ShowSimpleQuesBaseInfo";
//查看单个数据集文件信息
var ShowSimpleQuesFilesAPI = formalurl + "ShowSimpleQuesFiles";
//查看单个数据集扩展信息
var ShowSimpleQuesExtendInfoAPI = formalurl + "ShowSimpleQuesExtendInfo";
//查看单个数据集变量信息
var ShowSimpleQuesAllVariableAPI = formalurl + "ShowSimpleQuesAllVariable";
//查看单个变量信息
var ShowSimpleVariableAPI = formalurl + "ShowSimpleVariable";
//获取数据集版本
var ShowQuesLog = formalurls + "ShowQuesLog";
//查看变量日志
var ShowVariableLog = formalurls + "ShowVariableLog";
//几倍获取样本限制
var GetSampleInfoTeam = userUrl + "api/UserTeam/GetSampleInfoTeam";
//创建分析
var createReportAPI = formalurls + "v1/createReport";
//Ƶ�η���
var myFrequencyv2API = formalurl + "v2/myFrequency";
//多重响应分析
var myMultipleResponse_2API = formalurl + "v2/myMultipleResponse_2";
//列联表分析V2版本 交叉表
var Crosstabs_2 = formalurl + "v2/Crosstabs";
//描述性统计
var MeanValues2API = formalurl + "v2/Means";

//比较均值
var CompareMeansAPI = formalurl + "v2/CompareMeans";
//相关分析
var CorrelationAnalysisAPI = formalurl + "v2/CorrelationAnalysis";
var ExistsDown = userUrl + "api/UserTeam/ExistsDown";
//获取登录用户参与的子项目组
var ObtainTeamItems = userUrl + "api/UserTeam/ObtainTeamItems";
//小数保留
function DataTreating(num, mul, reservenum) {
	num = num - 0;
	if(typeof num == "string") {
		return num;
	} else if(typeof num == "number") {
		return(num * mul).toFixed(reservenum);
	}
}

function formatDYH(arg) {
	var reData = "";
	if (typeof (arg) == 'string' && arg[0] == "'" && arg[arg.length - 1] == "'") {
		reData = arg.slice(1, -1);
	} else {
		reData = arg;
	}
	return reData;
}
//获取URL中的值GetUrlVarValue(UserID)
function GetUrlVarValue(name) {
	//var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;
}

function GetLikeUrlVarValue(url, name) {
	//var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var reg = new RegExp("(^|&)" + name + "=([^&]*)", "i");
	var r = url.substr(1).match(reg);
	//	console.log(name)
	if(r != null) return decodeURI(r[2]);
	return null;
}

function replacechange(target, correspondence) {
	for(var key in target) {
		target[correspondence[key]] = target[key];
		delete target[key];
	}
	return target;
	//	console.log(target);
}

function replace(data, norm, keys) {
	for(var i = 0; i < data.length; i++) {
		for(x in norm) {
			if(norm[x] == "NaN") {
				norm[x] = "";
			}
			if((x - 0) == data[i][keys]) {
				data[i][keys] = norm[x];
				//                  delete data[i][keys];
			}
		}
	}
	return data;
}

function isJsonFormat(str) {
	try {
		JSON.parse(str);
	} catch(e) {
		return false;
	}
	return true;
}

function urlParamsToObj(data) {
	var result = {};
	try {
		if(data == null || data == '') {
			return result;
		} else {
			var paramsArr = data.split("&");
			for(var i = 0; i < paramsArr.length; i++) {
				var kv = paramsArr[i].split("=");
				result[kv[0]] = kv[1];
			}
			return result;
		}
	} catch(ex) {
		return result;
	}
}

jQuery.extend({
	mnp: function(obj) {
		for(x in obj) {
			if(typeof obj[x] == "string") {
				if(obj[x].charAt(obj[x].length - 1) == "'" && obj[x].charAt(0) == "'" || obj[x].charAt(obj[x].length - 1) == '"' && obj[x].charAt(0) == '"') {
					obj[x] = obj[x].substr(1, obj[x].length - 2);
				}

			}
		}
		return obj;
	}
});

Array.prototype._indexOf = function() {
	if(this === null) {
		throw new TypeError('"this" is null or not defined');
	}

	var that = Object(this),
		len = that.length >>> 0,
		param = arguments;

	if(param[1] && Math.abs(param[1]) >= len) return -1;

	startIndex = Math.max((param[1] ? param[1] : 0), 0);

	while(startIndex < len) {
		if(startIndex in that && param[0] === that[startIndex]) return startIndex;
		startIndex++;
	}
	return -1;
}

var correspondenceSJJ = {
	"QuesTitle": "数据集标题",
	"QuesSummary": "数据集概要",
	"QuesKeywords": "关键词",
	"QuesObject": "对象总体",
	"observationUnit": "观测单元",
	"QuesDataChannel": "采集方式",
	"SamplePlan": "抽样方案",
	"ResponseSituation": "响应情况",
	"DataTeam": "数据采集团队",
	"QuesDataTown": "地理覆盖",
	"MinimumGeographicUnit": "最小地理单元",
	"DataCoverageTime": "数据覆盖时间",
	"QuesStartTime": "采集开始时间",
	"QuesEndTime": "采集结束时间",
	"scaleScale": "量表尺度",
	"WeightDescription": "权重说明",
	"InfoTile": "标题",
	"InfoContent": "内容",
	"FileTile": "文件标题",
	"FileDescript": "文件内容",
	"QuesPublic": "数据集公开",
	"QuesSampleID": "样本库",
	"QuesSourceLink": "数据来源链接",
	"QuesSourceDepartment": "数据来源机构"
}
$(function() {
	//	var Login=$(document).find('.Login');
	//	console.log(Login);
	$.ajax({
		type: 'POST',
		url: UserInfo,
		data: {
			"TokenId": tokenId,
			"UserId": userId
		},
		success: UserInfoCallBack
	})

	function UserInfoCallBack(data) {
		var href = document.location.pathname;　
		if(!tokenId && !userId) {
			$(document).find('.Login').html('<div><img src="/images/login.png" alt="" /><span class="loginIn">登录</span><a style="color:#fff;font-size:12px;margin-left:12px" href="https://users.zkey.cc/ForgotPwd?url=https://csde.zkey.cc' + href + '">忘记密码</a></div>')
		} else {
			$(document).find('.Login').html('<div class="loginOut"><img src="/images/out_after.png" alt="" /><span style="float:left;margin-right:12px;font-size:12px">' + data.model.NickName + '</span><span STYLE="font-size:12px" class="out">退出</span><a style="color:#fff;font-size:12px;margin-left:12px" href="https://users.zkey.cc/ForgotPwd?url=https://csde.zkey.cc' + href + '">修改密码</a></div>')
		}

		$('.loginIn').click(function() {
			$('.UserLogin').show();
		})
		$('.close').click(function() {
			$('.UserLogin').hide();
		})

		if(!tokenId && !userId) {
			if(href.indexOf('exploration') != -1 || href.indexOf('home') != -1) {
				window.location.href = '/index.html';
			} else {
				//		location.href = href;
			}
		} else {

		}

		$('.determine').click(function() {
			var UserName = $('.username').val();
			var PassWord = $('.password').val();

			if(!UserName) {
				$('.tip').html('<img src="/images/warning.png" alt=""/>请输入账号')
				return false;
			} else if(!PassWord) {
				$('.tip').html('<img src="/images/warning.png" alt=""/>请输入密码')
				return false;
			} else {
				$.ajax({
					type: 'GET',
					dataType: "jsonp",
					jsonp: 'callback',
					url: Login,
					data: {
						"UserName": UserName,
						"PassWord": PassWord,
						"IsCookie": false,
						"IP": ''
					},
					success: function(data) {
						//					console.log(data);
						if(data.status == -1) {
							$('.tip').html('<img src="images/warning.png" alt=""/>账号或密码错误')
						} else if(data.status == 1) {
							layer.msg('审核未通过')
						} else if(data.status == 2) {
							layer.confirm('您没有注册,是否进行注册', {
								btn: ['确定', '取消']
							}, function() {
								window.location.href = 'https://users.zkey.cc/Register?url=https://csde.zkey.cc' + href
							})
						} else if(data.status == 3) {
							layer.confirm('您没有绑定手机号,是否进行绑定', {
								btn: ['确定', '取消']
							}, function() {
								window.location.href = 'https://users.zkey.cc/Login/BindingMobile?url=https://csde.zkey.cc' + href
							})
						} else if(data.status == 4) {
							layer.confirm('首次登录，需修改密码', {
								btn: ['确定', '取消']
							}, function() {
								window.location.href = 'https://users.zkey.cc/ForgotPwd?url=https://csde.zkey.cc' + href
							})
						} else if(data.status == 5) {
							layer.msg('该平台不对外开放')
						} else if(data.status == 0) {
							$('.tip').html('登录成功，正在跳转...');

							window.location.href = href;
						}
					},
					error: function(msg, data) {

					}
				})
			}

		})

		$(document).find('.loginOut>.out').click(function() {
			layer.confirm('是否确认退出用户', {
				btn: ['确定', '取消']
			}, function() {
				$.ajax({
					type: 'POST',
					url: LoginOut,
					data: {
						"TokenId": tokenId,
						"UserId": userId
					},
					success: LoginOutCallBack
				})

				function LoginOutCallBack(data) {

					if(href.indexOf('exploration') != -1 || href.indexOf('home') != -1) {
						window.location.href = '/index.html';
					} else {
						window.location.href = href;
					}

				}

			})
		})

		$(".exploration").click(function(e) {
			if(!tokenId && !userId) {
				e.preventDefault();
				href = '/exploration/exploration.html';
				$('.UserLogin').show();

			}
		});
		$(".DataVisualization").click(function(e) {
			if(!tokenId && !userId) {
				e.preventDefault();
				href = '/home/home.html';
				$('.UserLogin').show();

			}
		});
	}

})

$(document).ready(function() {　　
	var mynav = $('.header_center>ul').find('a');
	//	console.log(mynav)
	for(var i = 0; i < mynav.length; i++) {　
		var links = mynav[i].getAttribute('href');
		var myurl = document.location.href;　
		if(myurl.indexOf(links) != -1) {　　　　　　
			mynav[i].className = "navActive";　　　　

		}　
	}
})
jQuery(function($) {
	var _ajax = $.ajax;
	$.ajax = function(opt) {
		var _error = opt && opt.error || function(a, b, c) {};
		var _success = opt && opt.success || function(a, b, c) {};
		var _opt = $.extend(opt, {
			success: function(data) {
				var this_data = this.data;
				try {
					if(typeof(data) == "string") {
						var jsons = JSON.parse(data)

					}
				} catch(err) {
					if(typeof(data) == "string") {
						if(data.indexOf("NaN") > 0) {
							data = data.replace(new RegExp("NaN", 'g'), "\"NaN\"")
						}
					}
				}

				_success(data, this_data);
			},
			error: function(xhr, status, error) {
				_error(xhr, status, error);
			}
		});
		_ajax(_opt);
	};
});