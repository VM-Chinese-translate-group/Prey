const bone_effigy = [
    'crow',
    'sugar_glider',
    'bald_eagle',
    'mantis_shrimp',
    'capuchin_monkey',
    'flutter',
    'mimic_octopus',
    'tarantula_hawk',
    'elephant',
    'komodo_dragon',
    'kangaroo',
    'gorilla',
    'crocodile',
    'grizzly_bear',
]

ItemEvents.tooltip(event => {
	event.addAdvanced('kubejs:gorilla_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' 生命值：').gold(), Text.of(' 70').darkGreen()])
		text.add(3, [Text.of(' 模式：').gold(), Text.of(' 停留，游荡').gray()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.green(' 猴子').bold(true))
	  })

	  event.addAdvanced('kubejs:grizzly_bear_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 70').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.gray(' > 可用作坐骑，无需鞍。'))
		text.add(7, Text.gray(' > 攻击具有强大的击退效果'))
	  })


	  event.addAdvanced('kubejs:crow_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 25').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随,').darkAqua(), Text.of(' 聚集').yellow()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.gray(' > 可以收集物品并运送到附近的容器中'))
		text.add(7, Text.gray(' > 对亡灵造成额外伤害'))
		text.add(8, Text.gray(' > 可以让它停留在玩家的肩膀上。'))
	  })

	  event.addAdvanced('kubejs:crocodile_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 70').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡').gray()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.gray(' > 可将目标拖入水中并使其死亡'))
	  })
	  
	  event.addAdvanced('kubejs:capuchin_monkey_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 25').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, [Text.of(' > 给予它一个').gray(), Text.of(' 古代飞镖').gold(), Text.of('以提高攻击伤害并增加穿透能力').gray()])
		text.add(7, Text.green(' > 猴子').bold(true))
	  })

	  event.addAdvanced('kubejs:elephant_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 85').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 游荡').gray()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.gray(' > 骑乘时可带有箱子'))
	  })

	  event.addAdvanced('kubejs:komodo_dragon_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 55').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, [Text.of(' > 攻击会造成').gray(), Text.of(' 中毒').darkGreen()])
		text.add(7, Text.gray(' > 可以安装鞍骑乘奔跑'))

	  })

	  event.addAdvanced('kubejs:tarantula_hawk_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 40').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.gray(' > 攻击可使节肢动物瘫痪'))
	  })

	  event.addAdvanced('kubejs:kangaroo_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 45').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.gray(' > 育儿袋中有存储物品的空间'))
		text.add(7, Text.gray(' > 可在战斗中使用近战武器、胸甲和头盔'))
	  })

	  event.addAdvanced('kubejs:bald_eagle_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 25').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, [Text.of(' > 可用于侦察区域，需要装备').gray(), Text.of(' 猎鹰手套和兜帽').gold()])
	  })

	  event.addAdvanced('kubejs:sugar_glider_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 20').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.gray(' > 不能攻击'))
		text.add(7, [Text.of(' > 基本上 ').gray(), Text.of('没什么作用').darkRed()])
	  })


	  event.addAdvanced('kubejs:flutter_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 30').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, Text.green(' > 可以飞在危险区域外'))
		text.add(7, Text.green(' > 攻击锁定目标'))
	  })

	  event.addAdvanced('kubejs:mantis_shrimp_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 25').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随, ').yellow(), Text.of('破坏方块').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, [Text.of(' > 攻击会对目标').gray(), Text.of('造成').gray(), Text.of(' 火焰效果').red()])
		text.add(7, [Text.of(' > 进入').gray(), Text.of(' 破坏方块模式').darkAqua(), Text.of('，需要给它你想让它破坏的方块，并设置为').gray(), Text.of(' 游荡模式').gold()])
	})

	  event.addAdvanced('kubejs:mimic_octopus_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('属性：').underlined(true))
		text.add(2, [Text.of(' > 生命值：').gold(), Text.of(' 35').darkGreen()])
		text.add(3, [Text.of(' > 模式：').gold(), Text.of(' 停留，游荡,').gray(), Text.of(' 跟随').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('特殊属性：').underlined(true))
		text.add(6, [Text.of(' > 只能在水中生存，除非使用 ').gray(), Text.of('粘液球 ').green(), Text.of('，而粘液球必须每 2天重新使用一次。').gray()])
		text.add(7, [Text.of(' > 当获得特定物品时，它会模仿其他生物。在模仿中，你可以为它注入').gray(), Text.of(' 5-8个复刻凝胶').gold(), Text.of(' 来激活').gray(), Text.of(' 特殊攻击').yellow()])
		text.add(8, Text.white(' '))
		if (!event.alt) {
			text.add(9, [Text.of('按住 ').yellow(), Text.of('ALT ').gold(), Text.of('以了解更多有关其').yellow(), Text.of(' 形态，').aqua(), Text.of(' 攻击，').red(), Text.of('以及其相应').yellow(), Text.of('物品的内容').green()])
		  } else {
			text.add(9, [Text.of('苦力怕形态：').aqua()])
			text.add(10, [Text.of(' > 物品：').green(), Text.of('火药').gray()])
			text.add(11, [Text.of(' >攻击：').red(), Text.of('造成小型爆炸').gray()])
			text.add(12, [Text.of(' ').gray()])
			text.add(13, [Text.of('守护者形态：').aqua()])
			text.add(14, [Text.of(' > 物品：:').green(), Text.of('海晶石或碎片').gray()])
			text.add(15, [Text.of(' >攻击：').red(), Text.of('发射一束激光').gray()])
			text.add(16, [Text.of(' ').gray()])
			text.add(17, [Text.of('河豚形态 ：').aqua()])
			text.add(18, [Text.of(' > 物品：').green(), Text.of(' 河豚').gray()])
			text.add(19, [Text.of(' >攻击：').red(), Text.of('毒刺').gray()])
		  }
	  })

	event.add('blocky_siege:roaster_stand','装载火药，使用红石信号供电')

	event.addAdvanced('kubejs:warlock', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').yellow(), Text.of('SHIFT ').darkPurple(), Text.of('以查看').yellow(), Text.of('副职业综合').darkPurple()])
		  } else {
		  text.add(1, Text.gold('  ')) 
		  text.add(2, [Text.of('副职业综合：').gold().underlined()])
		  text.add(3, [Text.of(' > 战斗法师').aqua()])
		  text.add(4, [Text.of(' > 守护者').aqua()])
		  text.add(5, [Text.of(' > 魔术师').aqua()])
		  text.add(6, [Text.of(' > 魔剑士').aqua()])
		  text.add(7, Text.gold('  ')) 
		  }
		  if (!event.ctrl) {
			text.add(1, [Text.of('按住').yellow(), Text.of('CTRL').gold(), Text.of('来查看').yellow(), Text.of('职业属性').gold()])
		  } else {
			text.add(1, Text.gold('职业属性：').underlined().italic())
			text.add(2, [Text.of(' - 职业数据：').gray(), Text.of('+100最大法力值……').blue(), Text.of('（副职业综合效果：').yellow(), Text.of('+150最大法力值').darkPurple(), Text.of('）').yellow()])
			text.add(3, [Text.of(' - 职业宠物：').gray(), Text.of('沙漠蛛蜂').gold()])
			text.add(4, [Text.of(' - 职业被动：').gray(), Text.of('击杀任何怪物可获得45法力值').lightPurple()])
		  }
		  text.add(1, [Text.of('概要：').gold().underlined().italic(), Text.of('专注于魔法的职业。推荐副职业从前线输出伤害到后方治疗和辅助')])
		  text.add(2, Text.gold('  ')) 
	  })


	  event.addAdvanced('kubejs:rogue', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').yellow(), Text.of('SHIFT ').darkPurple(), Text.of('来查看').yellow(), Text.of('副职业综合').darkPurple()])
		  } else {
		  text.add(1, Text.gold('  ')) 
		  text.add(2, [Text.of('副职业综合:').gold().underlined()])
		  text.add(3, [Text.of(' > 赏金猎人').aqua()])
		  text.add(4, [Text.of(' > 炼金术师').aqua()])
		  text.add(5, [Text.of(' > 织梦者').aqua()])
		  text.add(6, [Text.of(' > 狂战士').aqua()])
		  text.add(7, Text.gold('  ')) 
		  }
		  if (!event.ctrl) {
			text.add(1, [Text.of('按住 ').yellow(), Text.of('CTRL ').gold(), Text.of('来查看').yellow(), Text.of('职业属性').gold()])
		  } else {
			text.add(1, Text.gold('职业属性：').underlined().italic())
			text.add(2, [Text.of(' - 职业数据：').gray(), Text.of('+20%暴击伤害').blue(), Text.of(' (副职业综合效果：').yellow(), Text.of('+30%暴击伤害').darkPurple(), Text.of(')').yellow()])
			text.add(3, [Text.of(' - 职业宠物：').gray(), Text.of('袋鼠').gold()])
			text.add(4, [Text.of(' - 职业被动：').gray(), Text.of('杀掉一个敌人时你会隐身于阴影并获得5秒的爆发加速').lightPurple()])
		  }
		  text.add(1, [Text.of('概要：').gold().underlined().italic(), Text.of('一个侧重于潜行和精确攻击的主职业，推荐的副职业都非常独特，从根本上改变了游戏的玩法')])
		  text.add(2, Text.gold('  ')) 
	  })



	  event.addAdvanced('kubejs:scout', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').yellow(), Text.of('SHIFT ').darkPurple(), Text.of('以查看').yellow(), Text.of('副职业综合').darkPurple()])
		  } else {
		  text.add(1, Text.gold('  ')) 
		  text.add(2, [Text.of('副职业综合:').gold().underlined()])
		  text.add(3, [Text.of(' > 奥术游侠').aqua()])
		  text.add(4, [Text.of(' > 探险家').aqua()])
		  text.add(5, [Text.of(' > 织梦师').aqua()])
		  text.add(6, [Text.of(' > 剑士').aqua()])
		  text.add(7, Text.gold('  ')) 
		  }
		  if (!event.ctrl) {
			text.add(1, [Text.of('按住 ').yellow(), Text.of('CTRL ').gold(), Text.of('以查看').yellow(), Text.of('职业属性').gold()])
		  } else {
			text.add(1, Text.gold('职业属性：').underlined().italic())
			text.add(2, [Text.of(' - 职业数据：').gray(), Text.of('+20%范围攻击速度').blue(), Text.of(' (副职业综合效果：').yellow(), Text.of('+35%范围攻击速度').darkPurple(), Text.of(')').yellow()])
			text.add(3, [Text.of(' - 职业宠物：').gray(), Text.of('白头海雕').gold()])
			text.add(4, [Text.of(' - 职业被动：').gray(), Text.of('每成功击中10次弹射物都会生成一道').lightPurple(), Text.of('闪电').yellow(), Text.of('击中目标，弹射物包括掷出的物品。').lightPurple()])
		  }
		  text.add(1, [Text.of('概要：').gold().underlined().italic(), Text.of('专注于远程攻击和精确的CQC，推荐的副职业都非常多样，且提供像连发弓和魔法双刃匕首这样的专业工具')])
		  text.add(2, Text.gold('  ')) 
	  })

	  event.addAdvanced('kubejs:warden', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').yellow(), Text.of('SHIFT ').darkPurple(), Text.of('以查看').yellow(), Text.of('副职业综合').darkPurple()])
		  } else {
		  text.add(1, Text.gold('  ')) 
		  text.add(2, [Text.of('副职业综合:').gold().underlined()])
		  text.add(3, [Text.of(' > 魔剑士').aqua()])
		  text.add(4, [Text.of(' > 剑士').aqua()])
		  text.add(5, [Text.of(' > 狂战士').aqua()])
		  text.add(6, [Text.of(' > 奥术游侠').aqua()])
		  text.add(7, Text.gold('  ')) 
		  }
		  if (!event.ctrl) {
			text.add(1, [Text.of('按住 ').yellow(), Text.of('CTRL ').gold(), Text.of('以查看').yellow(), Text.of('职业属性').gold()])
		  } else {
			text.add(1, Text.gold('职业属性：').underlined().italic())
			text.add(2, [Text.of(' - 职业数据：').gray(), Text.of('+2基础护甲值').blue(), Text.of(' (副职业综合效果：').yellow(), Text.of('+2.5基础护甲值').darkPurple(), Text.of(')').yellow()])
			text.add(3, [Text.of(' - 职业宠物：').gray(), Text.of('灰熊').gold()])
			text.add(4, [Text.of(' - 职业被动：').gray(), Text.of('击杀可以回复少许生命值').lightPurple()])
		  }
		  text.add(1, [Text.of('概要：').gold().underlined().italic(), Text.of('这个大胆的主职业擅长尽可能长时间地保持战斗状态。推荐的副职业非常灵活，将近战与其他主职业的独特之处结合在一起。')])
		  text.add(2, Text.gold('  ')) 
	  })


	  event.addAdvanced('kubejs:summoner', (item, advanced, text) => {
		
		  text.add(1, [Text.of('概要：').gold().underlined().italic(), Text.of('召唤师专注于指挥怪物，用副职业获得的特殊能力主宰生物们')])
		  text.add(2, Text.gold('  ')) 
		  text.add(3, [Text.of('只有这些副职业可用').gold().underlined(), Text.of(' (召唤师独有)').darkPurple()])
		  text.add(4, [Text.of(' > 噬血者').darkRed()])
		  text.add(5, [Text.of(' > 驯兽师').green()])
		  text.add(6, [Text.of(' > 唤灵者').aqua()])
		  text.add(7, Text.gold('  ')) 
		  text.add(8, Text.gold('职业属性：').underlined().italic())
		  text.add(9, [Text.of(' - 职业数据：').gray(), Text.of('+20%中毒伤害').blue()])
		  text.add(10, [Text.of(' - 职业宠物：').gray(), Text.of('科莫多巨蜥').gold()])
		  text.add(11, [Text.of(' - 职业被动：').gray(), Text.of('有概率生成自动被你驯服的生物。').lightPurple()])

	  })

	  event.addAdvanced('kubejs:blacksmith', (item, advanced, text) => {
		text.add(1, [Text.of('概要：').gold().underlined().italic(), Text.of(' 铁匠专门制作精美的工具和盔甲。每制作一件作品，他们的专业技能都会有所提高。随着时间的推移，他们的技艺也在不断提高')])
		text.add(2, Text.gold('  ')) 
		text.add(3, Text.yellow('职业属性：').underlined(true))
		text.add(4, [Text.of(' > 没有副职业').red().bold()])
		text.add(5, [Text.of(' > 职业宠物：').gray(), Text.of('鳄鱼').gold()])
		text.add(6, [Text.of(' > 职业被动：').gray(), Text.of('职业数据可以被升级。').lightPurple()])
		text.add(7, Text.gold(' '))
		text.add(8, Text.yellow('被动详情：').underlined())
		text.add(9, [Text.of(' > 每合成').white(), Text.of(' 250个工具').red(), Text.of('或者').white(), Text.of('200盔甲碎片').gold(), Text.of(' 都会获得').white(), Text.of(' +1').green(), Text.of('可升级数据').darkGreen(), Text.of('。木制和石制工具不计入其中').white()])
		text.add(10, Text.gold(' '))
		text.add(11, Text.gold(' '))
		if (!event.shift) {
			text.add(11, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看').gold(), Text.of('可升级的数据').darkGreen().underlined()])
		} else {
			text.add(11, Text.yellow('可升级的工具数据').underlined())
			text.add(12, Text.gray(' - 制作的近战武器攻击速度'))
			text.add(13, Text.gray(' - 制作的近战武器攻击伤害'))
			text.add(14, Text.gray(' - 制作的远程武器攻击速度'))
			text.add(15, Text.gray(' - 制作的远程武器宝石插槽'))
			text.add(16, Text.gray(' - 制作的盾牌护甲奖励'))
			text.add(17, Text.gray(' '))
			text.add(18, Text.yellow('可升级的盔甲数据').underlined())
			text.add(19, Text.gray(' - 制作盔甲防御'))
			text.add(20, Text.gray(' - 制作靴子宝石插槽'))
			text.add(21, Text.gray(' - 制作头盔宝石插槽'))
			text.add(22, Text.gray(' - 制作装备耐久'))
		}
	  })
	  event.addAdvanced('supplementaries:quiver', (item, advanced, text) => {
		
		text.add(1, [Text.of('将此物品悬停在箭上并').gray(), Text.of('右击 ').gold(), Text.of('以把箭放入箭袋。').gray(), ]), 
		text.add(2, Text.gold(' ')) 
		text.add(3, [Text.of('按住').gray(), Text.of(' X ').gold(), Text.of('以查看弓箭并在它们之间选择').gray()])
	  })

	event.addAdvanced('kubejs:rune_of_the_guardian', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of('神圣法术强度').gold()])
			text.add(3, [Text.of(' >').white(), Text.of('击杀怪物后有').white(), Text.of('30%').green(), Text.of('概率恢复').white(), Text.of('法力值').blue()])

		  }

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 最大法力值'))
			text.add(3, Text.aqua(' > 法术抗性'))
			text.add(4, Text.aqua(' > 神圣法术强度'))
			text.add(5, Text.aqua(' > 法术冷却时间'))
			text.add(6, Text.aqua(' '))
		  }
		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 一个灵活的职业可以持有着').white(), Text.of('守护者的魔法书').lightPurple().italic(), Text.of('和').white(), Text.of('霹雳长矛').lightPurple().italic(), Text.of('，提供治疗和保护。')])
		  text.add(3, Text.yellow('  '))
	  })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_battlemage', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of('火焰法术强度').gold()])
			text.add(3, [Text.of(' > 每达成').white(), Text.of('10次击杀').red(), Text.of('会获得10秒钟的').white(), Text.of('超负荷').lightPurple(), Text.of('效果').white()])
  
		}

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('来查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 末影法术强度'))
			text.add(3, Text.aqua(' > 雷电法术强度'))
			text.add(4, Text.aqua(' > 冰霜法术强度'))
			text.add(5, Text.aqua(' > 火焰法术强度'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 一个攻击性施法类职业，挥舞').white(), Text.of('战斗法师的法典').lightPurple().italic(), Text.of('，可以使用强大的元素法术')])
		  text.add(3, Text.yellow('  '))


	  })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_beastmaster', (item, advanced, text) => {
		
		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 装备有').white(), Text.of('尖骨').lightPurple().italic(), Text.of('和').white(), Text.of('冻伤刀片').lightPurple().italic(), Text.of('，这个职业可以指挥强大的盟友和宠物，用强大的生物军团压倒敌人。')])
		  text.add(3, Text.yellow('  '))
		  text.add(4, Text.yellow('被动').underlined(true))
		  text.add(5, [Text.of(' >').white(), Text.of('召唤的石宠物').blue(), Text.of('有').white(), Text.of('额外35%生命值。').green()])
		  text.add(6, [Text.of(' > 收集10个相同的').white(), Text.of('骨头图腾').gold(), Text.of('永久捕捉动物的灵魂 使用').white(), Text.of('召唤师大门').gold(), Text.of('让你获得一个').white(), Text.of('捕获的每一个动物灵魂的').white(), Text.of('召唤石').gold()])
		  text.add(7, [Text.of(' > 使用足够多的相同').white(), Text.of('召唤石宠物').blue(), Text.of('将使其').white(), Text.of('升级').darkGreen(), Text.of('。每一次').white(), Text.of('升级').darkGreen(), Text.of('授予该宠物类型大量').white(), Text.of('生命提升').green()])
		  text.add(8, [Text.of(' >').white(), Text.of('驯兽师图腾').darkGreen(), Text.of('冷却时间大大缩短').white()]) 
		  text.add(9, Text.yellow('  ')) 
		  text.add(10, Text.yellow('天赋树技能').underlined(true))
		  text.add(11, Text.aqua(' > 最大生命值'))
		  text.add(12, Text.aqua(' > 最大耐力值'))
		  text.add(13, Text.aqua(' > 耐力恢复率'))
		  text.add(14, Text.aqua(' > 受伤则有几率暴击'))
		  text.add(15, Text.yellow('  '))

	  })


	  event.addAdvanced('kubejs:rune_of_the_bloodripper', (item, advanced, text) => {
		if (!event.ctrl) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('CTRL ').yellow(), Text.of('以查看').gold(), Text.of('能力').lightPurple().italic().underlined(), Text.of('（嗜血者能力仅在夜晚生效）').yellow()])
		} else {
			text.add(1, [Text.of('能力').lightPurple().italic().underlined()])
			text.add(2, [Text.of(' > ').white(), Text.of('血吸：').red().underlined(), Text.of('击杀怪物有几率使你').white(), Text.of('吸取的血').darkRed(), Text.of('增加').white(), Text.of('1。').green()])
			text.add(3, Text.yellow(' '))
			text.add(4, [Text.of(' > ').white(), Text.of('寄生撕裂：').red().underlined(), Text.of('右击').yellow(), Text.of('以秒杀低于').white(), Text.of('50%生命值').darkGreen(), Text.of('的怪物，使你').white(), Text.of('吸取的血').darkRed(), Text.of('增加').white(), Text.of('3').green(), Text.of('，并且恢复').white(), Text.of('5%生命值').darkGreen(), Text.of('。升级').green(), Text.of('嗜血者').lightPurple(), Text.of('以秒杀更强大的敌人，并获得更多治疗量。').white()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > ').white(), Text.of('腐化容器：').red().underlined(), Text.of('每次攻击有几率').white(), Text.of('驯服').yellow(), Text.of('目标。每点').white(), Text.of('吸取的血').darkRed(), Text.of('增加').white(), Text.of('1%').green(), Text.of('几率。你会失去').white(), Text.of('10 吸取的血').darkRed(), Text.of('以').white(), Text.of('驯服').yellow(), Text.of('一只生物。').white(), Text.of('升级').green(), Text.of('嗜血者').lightPurple(), Text.of('以给予你').white(), Text.of('腐化盟友').darkRed(), Text.of('强力Buff。').white()])
			text.add(7, Text.yellow(' '))
			text.add(8, [Text.of(' > ').white(), Text.of('不死肉：').red().underlined(), Text.of('右击').yellow(), Text.of('盟友生物').darkAqua(), Text.of('以恢复').white(), Text.of('5%生命值').darkGreen(), Text.of('。').white(), Text.of('盟友生物').darkAqua(), Text.of('受到').white(), Text.of('治疗量3倍').red(), Text.of('的伤害').white()])
		}
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看').gold(), Text.of('等级').darkRed().italic().underlined(true)])
		} else {
			text.add(2, Text.darkRed('嗜血者等级：').underlined().underlined(true))
			text.add(3, [Text.of(' 等级1：').gold(), Text.of('用').white(), Text.of('寄生撕裂').red(), Text.of('击杀敌人，恢复5%生命值。每升一级').white(), Text.of('寄生撕裂').red(), Text.of('的最大生命值提升30。').white()])
			text.add(4, [Text.of(' 等级2：').gold(), Text.of('腐化容器').darkRed(), Text.of('获得永久').white(), Text.of('速度2效果').darkGreen()])
			text.add(5, [Text.of(' 等级3：').gold(), Text.of('用').white(), Text.of('寄生撕裂').red(), Text.of('击杀敌人，恢复').white(), Text.of('10%生命值').green()])
			text.add(6, [Text.of(' 等级4：').gold(), Text.of('腐化容器').darkRed(), Text.of('获得永久').white(), Text.of('灵魂窃取效果').lightPurple()])
			text.add(7, [Text.of(' 等级5：').gold(), Text.of('用').white(), Text.of('').white(), Text.of('寄生撕裂').red(), Text.of('击杀敌人，恢复').white(), Text.of('15%生命值').green()])
			text.add(8, [Text.of(' 等级6：').gold(), Text.of('腐化容器').darkRed(), Text.of('获得永久').white(), Text.of('抗性提升效果').darkAqua()])
			text.add(9, [Text.of(' 等级7：').gold(), Text.of('用').white(), Text.of('寄生撕裂').red(), Text.of('击杀敌人，恢复').white(), Text.of('20%生命值').green()])
			text.add(10, [Text.of(' 等级8：').gold(), Text.of('腐化容器').darkRed(), Text.of('获得永久').white(), Text.of('力量效果').red()])
			text.add(11, [Text.of(' 等级9：').gold(), Text.of('用').white(), Text.of('寄生撕裂').red(), Text.of('击杀敌人，恢复').white(), Text.of('30%生命值').green()])
			text.add(12, [Text.of(' 等级10：').gold(), Text.of('腐化容器').darkRed(), Text.of('获得').white(), Text.of('灵魂保护效果').yellow(), Text.of('，它们死后可以获得。')])
			text.add(13, Text.yellow('  '))
		}

		text.add(1, Text.yellow('概述').underlined(true))
		text.add(2, [Text.of(' > 挥舞着双镰刀，').white(), Text.of('荒土').darkRed().italic(), Text.of('和').white(), Text.of('计算，').darkRed().italic(), Text.of('该副职业从怪物身上收割血液，用它将敌人变成盟友。')])
		text.add(3, Text.yellow('  ')) 
		text.add(4, Text.yellow('天赋树技能').underlined(true))
		text.add(5, Text.aqua(' > 攻击速度'))
		text.add(6, Text.aqua(' > 攻击击退'))
		text.add(7, Text.aqua(' > 近战暴击伤害'))
		text.add(8, Text.aqua(' > 每次击中的生命值'))
		text.add(9, Text.yellow('  '))
	})

/// In guide book make sure to distinguish that certain bonuses only go to certain creature types. The 3 types are Summoned (from summoning stones), Tamed (from the taming flute), and Conjured (from spells)

event.addAdvanced('kubejs:rune_of_the_conjurer', (item, advanced, text) => {
	

	if (!event.alt) {
		text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
	  } else {
		text.add(1, Text.yellow('被动').underlined(true))
		text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of('法术书召唤物').aqua(), Text.of('伤害').gold()])
        text.add(3, [Text.of(' >').white(), Text.of('当法术书召唤物').aqua(), Text.of('每击杀1个敌人时，').gold(), Text.of(' +10').green(), Text.of('法力值').gold()])
		text.add(4, [Text.of(' >').white(), Text.of(' 当').gold(), Text.of('魔法书召唤物').aqua(), Text.of('攻击一个敌人，它可以').gold(), Text.of('回复生命值').green()])
	}
	if (!event.shift) {
		text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
	  } else {
		text.add(1, Text.yellow('天赋树技能').underlined(true))
		text.add(2, Text.aqua(' > 鲜血法术强度'))
		text.add(3, Text.aqua(' > 唤魔法术强度'))
		text.add(4, Text.aqua(' > 法术冷却缩减'))
		text.add(5, Text.aqua(' > 召唤生物伤害'))
		text.add(6, Text.yellow('  '))
	  }
	  text.add(1, Text.yellow('概述').underlined(true))
	  text.add(2, [Text.of(' > 携带有').white(), Text.of('死亡图腾').lightPurple().italic(), Text.of('和').white(), Text.of('织根尖牙').lightPurple().italic(), Text.of('，在战斗中，这个职业会召唤强大的盟友来帮助他们。')])
	  text.add(3, Text.yellow('  '))
  })
	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_spellsword', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of('更快的法术冷却时间').gold()])
			text.add(3, [Text.of(' > 使用来自').white(), Text.of('法术书').blue(), Text.of('或者').white(), Text.of('卷轴').gold(), Text.of('的').white(), Text.of('魔法').gold(), Text.of('会获得一个').white(), Text.of(' 10%的伤害加成，').darkRed(), Text.of('时长').white(), Text.of('8秒').yellow()])
  
		}

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 攻击速度'))
			text.add(3, Text.aqua(' > 攻击击退'))
			text.add(4, Text.aqua(' > 法术抗性'))
			text.add(5, Text.aqua(' > 冷却缩减'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 星碎').lightPurple(), Text.of('搭配').white().italic(), Text.of('精通的').white(), Text.of('破晓').lightPurple().italic(), Text.of('，对魔法的精通使这个混合职业在近身格斗和远程施法方面都非常出色。')])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_kensei', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of('攻击速度').gold()])
			text.add(3, [Text.of(' >').white(), Text.of('每击杀一只怪物，都有').white(), Text.of('50%').green(), Text.of('几率获得10秒').white(), Text.of('急迫').yellow()])
  
		}

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 远程伤害'))
			text.add(3, Text.aqua(' > 移动速度'))
			text.add(4, Text.aqua(' > 攻击速度'))
			text.add(5, Text.aqua(' > 耐力恢复率'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 驾驭着').white(), Text.of('混沌').darkRed().italic(), Text.of('和').white(), Text.of('秩序').darkAqua().italic(), Text.of('，剑士会斩杀任何威胁着平衡的敌人')])
		  text.add(3, Text.yellow('  '))
	  })


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_berserker', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' > 天赋树由').white(), Text.of('6个忘却的试炼组成').darkRed().italic(), Text.of('每完成一个忘却的试炼，你就可以获得一个').white(), Text.of('被动能力').lightPurple()])
			text.add(3, [Text.of(' >').white(), Text.of(' +5%').green(), Text.of('受伤时的攻击速度').gold()])
		}

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('试炼').underlined(true))
			text.add(2, [Text.of(' > 试炼：').white(), Text.of('嗜血').darkRed().italic()])
			text.add(3, [Text.of(' > 试炼：').white(), Text.of('潮涌').darkRed().italic()])
			text.add(4, [Text.of(' > 试炼：').white(), Text.of('幽影态').darkRed().italic()])
			text.add(5, [Text.of(' > 试炼：').white(), Text.of('复原').darkRed().italic()])
			text.add(6, [Text.of(' > 试炼：').white(), Text.of('打击').darkRed().italic()])
			text.add(7, [Text.of(' > 试炼：').white(), Text.of('血誓').darkRed().italic()])
			text.add(8, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 装备有').white(), Text.of('超凡').lightPurple().italic(), Text.of('和').white(), Text.of('暴怒').lightPurple().italic(), Text.of('，狂战士必须面对').white(), Text.of('6个忘却的试炼').darkRed(), Text.of('才能夺回失去的技能')])
		  text.add(3, Text.yellow('  '))
	  })
	  

	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_spirit_caller', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +15%').green(), Text.of('弹射物伤害').gold()])
			text.add(3, [Text.of(' > 当你击杀怪物或').white(), Text.of('击中BOSS').white().italic(), Text.of('3次').yellow(), Text.of('你就能收集').white(), Text.of('灵魂').aqua()])
			text.add(4, [Text.of(' > 当你').white(), Text.of('副手').green(), Text.of('持有').white(), Text.of('灵魂水晶').blue(), Text.of('时，击败强大的生物能捕获').white(), Text.of('灵魂').darkPurple(), Text.of('。想使用').white(), Text.of('灵魂').aqua().italic(), Text.of('用').white(), Text.of('杀戮宝珠.').darkRed(), Text.of('将').white, Text.of('灵魂').darkPurple(), Text.of('作为盟友召唤').white()])

		  }

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 耐力恢复'))
			text.add(3, Text.aqua(' > 近战伤害'))
			text.add(4, Text.aqua(' > 受到治疗'))
			text.add(5, Text.aqua(' > 来自击杀生物的经验')) /// 
			text.add(6, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 唤灵者挥舞宝剑').white(), Text.of('以太').lightPurple().italic(), Text.of('，').white(), Text.of('一块灵魂水晶').lightPurple().italic(), Text.of('和').white(), Text.of('Orb of Slaughtered Foes').darkRed().italic(), Text.of('，同时利用收集到的').white(), Text.of('灵魂').aqua(), Text.of('来召唤被击败敌人的').white(), Text.of('灵魂').darkPurple()])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:rune_of_the_explorer', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +100% ').green(), Text.of('钓鱼时的运气').gold()])
			text.add(3, [Text.of(' >').white(), Text.of(' +50% ').green(), Text.of('钓鱼经验').gold()])
			text.add(4, [Text.of(' >').white(), Text.of(' 10% ').green(), Text.of('从钓鱼中获得双倍战利品的几率').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 最大生命值'))
			text.add(3, Text.aqua(' > 最大耐力值'))
			text.add(4, Text.aqua(' > 耐力恢复率'))
			text.add(5, Text.aqua(' > 移动速度'))
			text.add(6, Text.yellow('  '))
		  }
		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 拥有各种小工具，例如').white(), Text.of(' Anomoly').lightPurple().italic(), Text.of('和').white(), Text.of('铁滑翔伞').aqua(), Text.of('，还有').white(), Text.of('永恒牛排').gold(), Text.of('，探险家是一个非常全能的职业，允许多种玩法。')])
		  text.add(3, Text.yellow('  '))
	  })

	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  
	  event.addAdvanced('kubejs:rune_of_the_arcane_ranger', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of('攻击击退').gold()])
			text.add(3, [Text.of(' >').white(), Text.of(' 命中敌人能叠加').white(), Text.of(' +10% 攻击速度增益').green(), Text.of('（上限至').white(), Text.of('100%').lightPurple(), Text.of('）受到伤害后，增益重置为').white(), Text.of('0%').darkRed()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 弓箭蓄力速度'))
			text.add(3, Text.aqua(' > 法术冷却时间'))
			text.add(4, Text.aqua(' > 施法冷却缩减'))
			text.add(5, Text.aqua(' > 移动速度'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 奥术游侠使用').white(), Text.of('狂怒').lightPurple().italic(), Text.of('和箭矢进行远程杀敌，同时使用').white(), Text.of('权力').lightPurple().italic(), Text.of('和').white(), Text.of('风暴').lightPurple().italic(), Text.of('主宰着近战。')])
		  text.add(3, Text.yellow('  '))
		
	  })


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_dreamweaver', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').gray(), Text.of(' +10%').green(), Text.of('点燃目标几率').gold()])
			text.add(3, [Text.of(' > ').gray(), Text.of('+100%').green(), Text.of('对疯狂（低san）').gold(), Text.of('玩家').green(), Text.of('的伤害').gold()])
			text.add(4, Text.yellow('---------------------------------------'))
			text.add(5, [Text.of(' > 使用').gray(), Text.of('战争贩子').red(), Text.of('和').gray(), Text.of('苦痛').darkRed(), Text.of('按一定模式攻击，会对目标产生').gray(), Text.of('负面效果，').gold(), Text.of('玩家').green(), Text.of('和').gray(), Text.of('非玩家').aqua(), Text.of('会获得不同的').gray(), Text.of('负面效果').yellow()])
			text.add(6, [Text.of(' > 你').gray(), Text.of('必须').gold(), Text.of('在').gray(), Text.of('主手').yellow(), Text.of('使用').gray(), Text.of('苦痛').darkRed(), Text.of('并').gray(), Text.of(' 在你的').gray(), Text.of('副手').yellow(), Text.of('使用').gray(), Text.of('战争贩子').red(), Text.of('，效果才能生效。').gray()])
			text.add(7, [Text.of(' ').gray()])
			text.add(8, [Text.of('如何使用：').yellow().underlined()])
			text.add(9, [Text.of(' > 使用').gray(), Text.of('战争贩子').red(), Text.of('射击敌人三次，使敌人获得').gray(), Text.of('织梦师印记').lightPurple(), Text.of('和').gray(), Text.of('流血效果').gold()])
			text.add(10, [Text.of(' > 紧接着用').gray(), Text.of('苦痛').darkRed(), Text.of('的一刀结束连击。').gray()])
			text.add(11, [Text.of('     - 目标的玩家').darkGreen(), Text.of('将').gray(), Text.of('陷入疯狂').darkPurple(), Text.of('并被').gray(), Text.of('虚弱').blue(), Text.of('共').gray(), Text.of('20秒').yellow()])
			text.add(12, [Text.of('     - 目标的怪物').aqua(), Text.of('将被击晕').gray(), Text.of('8秒，').yellow(), Text.of('但是Boss只有').gray(), Text.of('4秒').yellow()])
			text.add(13, [Text.of('  ').yellow()])
			text.add(14, [Text.of('注意：').red(), Text.of('如果被拥有').gray(), Text.of('织梦师标记').lightPurple(), Text.of('的敌人击中，就需要重新开始连击。').gray()])


		}

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 远程武器攻击速度'))
			text.add(3, Text.aqua(' > 箭生命窃取'))
			text.add(4, Text.aqua(' > 药水效果下的最大生命'))
			text.add(5, Text.aqua(' > 拥有药水效果时提供每次击中的生命值'))
			text.add(6, Text.yellow('  '))
		  }
		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 装备有').white(), Text.of('战争贩子').red().italic(), Text.of('和').white(), Text.of('苦痛，').darkRed().italic(), Text.of('织梦师会扭曲目标的心智，使其陷入眩晕或疯狂')])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:rune_of_the_bounty_hunter', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('ALT ').yellow(), Text.of('以查看被动').gold()])
		  } else {
			text.add(1, Text.yellow('被动').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of('受伤时暴击几率').gold()])
			text.add(3, [Text.of(' > 完成一个').white(), Text.of('悬赏').gold().italic(), Text.of('或').white(), Text.of('高价悬赏目标，').gold().italic(), Text.of('会带给你比其他副职业更好的奖励')])
			text.add(4, [Text.of(' > ').white(), Text.of('每10分钟召唤').white(), Text.of('3只友善的袋鼠').green()])

		  }

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').gold(), Text.of('SHIFT ').yellow(), Text.of('以查看天赋树技能。').gold()])
		  } else {
			text.add(1, Text.yellow('天赋树技能').underlined(true))
			text.add(2, Text.aqua(' > 装备盾时的伤害'))///
			text.add(3, Text.aqua(' > 生命回复'))
			text.add(4, Text.aqua(' > 暴击几率'))
			text.add(5, Text.aqua(' > 暴击伤害'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 装备有').white(), Text.of('全套装备').gold(), Text.of('，特别是').white(), Text.of('轻风剑').lightPurple().italic(), Text.of('和').white(), Text.of('尖兵回旋镖').lightPurple().italic(), Text.of('该职业擅长一对一战斗。')])
		  text.add(3, Text.yellow('  '))
		
	  })



	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_alchemist', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('按住 ').red(), Text.of('ALT ').yellow(), Text.of('以查看负面被动').red()])
		  } else {
			text.add(1, Text.darkRed('负面被动：').underlined(true))
			text.add(2, Text.red(' > 无命中耐力回复效果'))
			text.add(3, Text.red(' > 攻击伤害仅为正常伤害的25%'))
			text.add(4, Text.red(' > 最大生命值降低50%'))
			
		  }

		if (!event.shift) {
			text.add(1, [Text.of('按住 ').green(), Text.of('SHIFT ').yellow(), Text.of('以查看被动.').green()])
		  } else {
			text.add(1, Text.darkGreen('正面被动').underlined(true))
			text.add(2, Text.green(' > 在药水效果下，你的最大生命值将增至正常值'))
			text.add(3, Text.green(' > +200% 最大耐力值'))
			text.add(4, Text.green(' > +50% 耐力恢复率'))
			text.add(5, Text.green(' > +75% 所有酿造药水持续时长与强度提升'))
			text.add(6, Text.green(' > +75% 拥有药水效果时提供攻击速度'))
			text.add(7, Text.green(' > +75% 拥有药水效果时提供伤害'))
			text.add(8, Text.green(' > +25% 药水效果提供伤害'))
			text.add(9, Text.green(' > +25% 对中毒敌人的暴击率'))
			text.add(10, Text.green(' > +25% 对中毒敌人的暴击伤害'))
			text.add(11, Text.green(' > +20% 受到治疗'))
			text.add(12, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('概述').underlined(true))
		  text.add(2, [Text.of(' > 甚至拥有着').white(), Text.of('酸骨').lightPurple().italic(), Text.of('，炼金术师最初很弱。然而，它可以从药水中获得非凡的加成，随着时间的推移，它的力量会达到难以想象的高度。')])
		  text.add(3, Text.yellow('  '))
		})




	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:creeper_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').white(), Text.of('SHIFT ').yellow(), Text.of('以查看').white(), Text.of('悬赏详情').gold()])
		  } else {
			text.add(1, Text.gold('悬赏详情：'))
			text.add(2, [Text.of(' > 普通赏金：').green(), Text.of('击杀15x 苦力怕').italic().darkRed()])
			text.add(3, [Text.of(' > 不凡赏金：').yellow(), Text.of('击杀25x  苦力怕').italic().darkRed()]) 
			text.add(4, [Text.of(' > 稀有赏金：').darkPurple(), Text.of('击杀50x 苦力怕').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > 赏金：').gold(), Text.of('击杀').white(), Text.of('50只').darkGreen().italic(), Text.of('后，每击杀一只可获得').white(), Text.of('5枚铜币。').yellow()])   
		  }
		  text.add(1, [Text.of('右击').gold(), Text.of('以开始狩猎。').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('时间限制：').white(), Text.of('5分钟').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:skeleton_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').white(), Text.of('SHIFT ').yellow(), Text.of('以查看').white(), Text.of('悬赏详情').gold()])
		  } else {
			text.add(1, Text.gold('赏金详情：'))
			text.add(2, [Text.of(' > 普通赏金：').green(), Text.of('击杀25x 骷髅').italic().darkRed()])
			text.add(3, [Text.of(' > 不凡赏金：').yellow(), Text.of('击杀50x 骷髅').italic().darkRed()]) 
			text.add(4, [Text.of(' > 稀有赏金：').darkPurple(), Text.of('击杀75x 骷髅').italic().darkRed()])
			text.add(5, Text.yellow(' '))			
			text.add(6, [Text.of(' > 赏金：').gold(), Text.of('击杀').white(), Text.of('75只').darkGreen().italic(), Text.of('后，每击杀一只可获得').white(), Text.of('3枚铜币。').yellow()])   
		  }
		  text.add(1, [Text.of('右击').gold(), Text.of('以开始狩猎。').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('时间限制：').white(), Text.of('5分钟').green()])
		  text.add(4, Text.yellow(' '))
		})
		  event.addAdvanced('kubejs:spider_bounty', (item, advanced, text) => {
			
			if (!event.shift) {
				text.add(1, [Text.of('按住 ').white(), Text.of('SHIFT ').yellow(), Text.of('以查看').white(), Text.of('悬赏详情').gold()])
			  } else {
				text.add(1, Text.gold('赏金详情：'))
				text.add(2, [Text.of(' > 普通赏金：').green(), Text.of('击杀25x 蜘蛛').italic().darkRed()])
				text.add(3, [Text.of(' > 不凡赏金：').yellow(), Text.of('击杀50x 蜘蛛').italic().darkRed()]) 
				text.add(4, [Text.of(' > 稀有赏金：').darkPurple(), Text.of('击杀75x 蜘蛛').italic().darkRed()])
				text.add(5, Text.yellow(' '))
				text.add(6, [Text.of(' > 赏金：').gold(), Text.of('击杀').white(), Text.of('75只').darkGreen().italic(), Text.of('后，每击杀一只可获得').white(), Text.of('3枚铜币。').yellow()])   
			  }
			  text.add(1, [Text.of('右击').gold(), Text.of('以开始狩猎。').white()])
			  text.add(2, Text.yellow(' '))
			  text.add(3, [Text.of('时间限制：').white(), Text.of('5分钟').green()])
			  text.add(4, Text.yellow(' '))
			})

	  event.addAdvanced('kubejs:zombie_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').white(), Text.of('SHIFT ').yellow(), Text.of('以查看').white(), Text.of('悬赏详情').gold()])
		  } else {
			text.add(1, Text.gold('赏金详情：'))
			text.add(2, [Text.of(' > 普通赏金：').green(), Text.of('击杀25x 僵尸').italic().darkRed()])
			text.add(3, [Text.of(' > 不凡赏金：').yellow(), Text.of('击杀50x 僵尸').italic().darkRed()]) 
			text.add(4, [Text.of(' > 稀有赏金：').darkPurple(), Text.of('击杀75x 僵尸').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > 赏金：').gold(), Text.of('击杀').white(), Text.of('75只').darkGreen().italic(), Text.of('后，每击杀一只可获得').white(), Text.of('3枚铜币。').yellow()])   
		  }
		  text.add(1, [Text.of('右击').gold(), Text.of('以开始狩猎。').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('时间限制：').white(), Text.of('5分钟').green()])
		  text.add(4, Text.yellow(' '))
		})
	
	  event.addAdvanced('kubejs:enderman_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').white(), Text.of('SHIFT ').yellow(), Text.of('以查看').white(), Text.of('悬赏详情').gold()])
		  } else {
			text.add(1, Text.gold('赏金详情：'))
			text.add(2, [Text.of(' > 普通赏金：').green(), Text.of('击杀15x末影人').italic().darkRed()])
			text.add(3, [Text.of(' > 不凡赏金：').yellow(), Text.of('击杀25x 末影人').italic().darkRed()]) 
			text.add(4, [Text.of(' > 稀有赏金：').darkPurple(), Text.of('击杀50x 末影人').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > 赏金：').gold(), Text.of('击杀').white(), Text.of('50只').darkGreen().italic(), Text.of('后，每击杀一只可获得').white(), Text.of('5枚铜币。').yellow()])  
		  }
		  text.add(1, [Text.of('右击').gold(), Text.of('以开始狩猎。').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('时间限制：').white(), Text.of('5分钟').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:pillager_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').white(), Text.of('SHIFT ').yellow(), Text.of('以查看').white(), Text.of('悬赏详情').gold()])
		  } else {
			text.add(1, Text.gold('赏金详情：'))
			text.add(2, [Text.of(' > 普通赏金：').green(), Text.of('击杀15x掠夺者').italic().darkRed()])
			text.add(3, [Text.of(' > 不凡赏金：').yellow(), Text.of('击杀25x 掠夺者').italic().darkRed()]) 
			text.add(4, [Text.of(' > 稀有赏金：').darkPurple(), Text.of('击杀50x 掠夺者').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > 赏金：').gold(), Text.of('击杀').white(), Text.of('50只').darkGreen().italic(), Text.of('后，每击杀一只可获得').white(), Text.of('5枚铜币。').yellow()])  
		  }
		  text.add(1, [Text.of('右击').gold(), Text.of('以开始狩猎。').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('时间限制：').white(), Text.of('5分钟').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:piglin_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').white(), Text.of('SHIFT ').yellow(), Text.of('以查看').white(), Text.of('悬赏详情').gold()])
		  } else {
			text.add(1, Text.gold('赏金详情：'))
			text.add(2, [Text.of(' > 普通赏金：').green(), Text.of('击杀15x猪灵').italic().darkRed()])
			text.add(3, [Text.of(' > 不凡赏金：').yellow(), Text.of('击杀25x 猪灵').italic().darkRed()]) 
			text.add(4, [Text.of(' > 稀有赏金：').darkPurple(), Text.of('击杀50x 猪灵').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > 赏金：').gold(), Text.of('击杀').white(), Text.of('50只').darkGreen().italic(), Text.of('后，每击杀一只可获得').white(), Text.of('5枚铜币。').yellow()])  
		  }
		  text.add(1, [Text.of('右击').gold(), Text.of('以开始狩猎。').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('时间限制：').white(), Text.of('5分钟').green()])
		  text.add(4, Text.yellow(' '))
	  })	
	  
	  event.addAdvanced('kubejs:drowned_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('按住 ').white(), Text.of('SHIFT ').yellow(), Text.of('以查看').white(), Text.of('悬赏详情').gold()])
		  } else {
			text.add(1, Text.gold('赏金详情：'))
			text.add(2, [Text.of(' > 普通赏金：').green(), Text.of('击杀25x 溺尸').italic().darkRed()])
			text.add(3, [Text.of(' > 不凡赏金：').yellow(), Text.of('击杀50x 溺尸').italic().darkRed()]) 
			text.add(4, [Text.of(' > 稀有赏金：').darkPurple(), Text.of('击杀75x 溺尸').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > 赏金：').gold(), Text.of('击杀').white(), Text.of('75只').darkGreen().italic(), Text.of('后，每击杀一只可获得').white(), Text.of('3枚铜币。').yellow()])    
		  }
		  text.add(1, [Text.of('右击').gold(), Text.of('以开始狩猎。').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('时间限制：').white(), Text.of('5分钟').green()])
		  text.add(4, Text.yellow(' '))
		})

//	  event.addAdvanced('kubejs:mutant_bounty', (item, advanced, text) => {
//		
//		if (!event.shift) {
//			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
//		  } else {
//			text.add(1, Text.gold('Bounty Details:'))
//			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 10x Mutants').italic().darkRed()])
//			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 15x Mutants').italic().darkRed()]) 
//			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 25x Mutants').italic().darkRed()])
//			text.add(5, Text.yellow(' '))
//			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 10 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 25').darkGreen().italic()]) 
//		  }
//		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
//		  text.add(2, Text.yellow(' '))
//		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
//		  text.add(4, Text.yellow(' '))
//	  })

	event.addAdvanced('musketmod:pistol', (item, advanced, text) => {
		
		  text.add(1, [Text.of('按').gold(), Text.of('F').yellow().italic(), Text.of('放在副手，与近战武器同时使用。').gold()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('使用').gold().italic(), Text.of('纸包弹药').yellow(), Text.of('作为子弹').gold().italic()])


	  })

	event.addAdvanced('kubejs:subclass_skill_point', (item, advanced, text) => {
		text.add(1, [Text.of('获得一个').gray(), Text.of('副职业点数').gold()])
	})
//.tooltip('Right click with this item in your hand to add a skill point to your subclass skill tree.')
	event.addAdvanced('kubejs:torn_page', (item, advanced, text) => {
		text.add(1, [Text.of('收集并使用').gray(), Text.of('10个').yellow(), Text.of('来获得').gray(), Text.of('副职业点数').gold()])
	})

	event.addAdvanced('kubejs:bloodlust', (item, advanced, text) => {
		text.add(1, [Text.of('试炼：').darkRed().italic(), Text.of('5分钟').gold(), Text.of('以内击杀').white().underlined(), Text.of('50名').red(), Text.of('敌人').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('奖励：').green().italic(), Text.of('每次成功击中都会叠加').white(), Text.of('四秒的').white(),Text.of('急迫').gold(), Text.of('效果，最多叠加至').white(), Text.of('+90% 攻击速度').gold(), Text.of('。如果你被击中').white(), Text.of('3次').darkRed(), Text.of('，那么效果将被清除。').white()])
	})

	event.addAdvanced('kubejs:restoration', (item, advanced, text) => {
        text.add(1, [Text.of('试炼：').darkRed().italic(), Text.of('用').white(), Text.of('法术').blue(), Text.of('击杀').white(), Text.of('500名').red().underlined(), Text.of('敌人').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('奖励：').green().italic(), Text.of('每次成功击中都会叠加').white(), Text.of('四秒的').white(),Text.of('急迫').gold(), Text.of('效果，最多叠加至').white(), Text.of('+90% 攻击速度').gold(), Text.of('。如果你被击中').white(), Text.of('3次').darkRed(), Text.of('，那么效果将被清除。').white()])
	})

	event.addAdvanced('kubejs:strike', (item, advanced, text) => {
		text.add(1, [Text.of('试炼：').darkRed().italic(), Text.of('使用').white(), Text.of('弹射物').darkPurple(), Text.of('击杀').white(), Text.of('1500').red().underlined(), Text.of('名敌人').white()])
        text.add(2, Text.white(' ')),
        text.add(3, [Text.of('奖励：').green().italic(), Text.of('第').white(), Text.of('15').yellow(), Text.of('个成功命中的弹射物，将会召唤2道').white(), Text.of('雷电').yellow(), Text.of('击中当前目标。')])
    })
	event.addAdvanced('kubejs:surge', (item, advanced, text) => {
        text.add(1, [Text.of('试炼：').darkRed().italic(), Text.of(' 生成一只已驯服的狼宝宝。你必须帮助它打败某些生物。如果狼死了，那么便失败。').white()])
        text.add(2, Text.white(' ')),
        text.add(3, [Text.of('阶段1：').gold(), Text.of('击杀一只').gray(), Text.of('獠牙兽。').red(), Text.of('可在').gray(), Text.of('冰刺之地中').blue(), Text.of('找到').gray()]),
        text.add(4, [Text.of('阶段2：').gold(), Text.of('击杀一只').gray(), Text.of('皮行者（Skinwalker）。').red(), Text.of('可以在许多').gray(), Text.of('温带生物群系，像是').gray(), Text.of('平原、森林和针叶林').green(), Text.of('中找到。').gray()]),
        text.add(5, [Text.of('阶段3：').gold(), Text.of('击杀一只').gray(), Text.of('鹿角温迪戈（Antlered Wendigo）。').red(), Text.of('可以在').gray(), Text.of('原始松木针叶林或针叶林生物群系中').darkGreen(), Text.of('它的巢穴中找到').gray()]),
        text.add(6, [Text.of('阶段4：').gold(), Text.of('？？？').darkRed()]),
        text.add(7, Text.white(' ')),
        text.add(8, [Text.of('奖励：').green().italic(), Text.of('击杀一名敌人后获得').white(), Text.of('6秒速度提升').green()])
	})
	event.addAdvanced('kubejs:trial_blood_oath', (item, advanced, text) => {
        text.add(1, [Text.of('试炼：').darkRed().italic(), Text.of('变得').white(), Text.of('失去理智').darkRed(), Text.of('，面对着内心的恶魔，屠杀').white(), Text.of('5').red(), Text.of('个这样追杀你的生物而不死。').white()])
        text.add(2, Text.white(' ')),
        text.add(3, [Text.of('奖励：').green().italic(), Text.of('每').white(), Text.of(' 15分钟').blue(), Text.of('你会获得一个').white(), Text.of('血誓').darkRed(), Text.of('，如果你使用它，您将获得一次性效果，即'), Text.of('死而复生').gold()])
    })// Not Finished

	event.addAdvanced('kubejs:shadow_form', (item, advanced, text) => {
        text.add(1, [Text.of('试炼：').darkRed().italic(), Text.of('击杀').white(), Text.of('150').red().underlined(), Text.of('名敌人而不死').white()])
        text.add(2, Text.white(' ')),
        text.add(3, [Text.of('奖励：').green().italic(), Text.of('当你的生命值低于30%时，你将获得').white(), Text.of('止心术').darkPurple(), Text.of('效果').white(), Text.of('20秒').gold().underlined(), Text.of('，在此效果下，你暂时处于无敌状态，但一旦效果消失，你将承受50%的累积伤害。').white()])
        text.add(4, Text.white(' ')),
        text.add(5, [Text.of('效果冷却：').yellow(), Text.of('3分钟').darkGreen()])
    })
	event.addAdvanced('kubejs:time_turner', (item, advanced, text) => {
        text.add(1, [Text.of('扭曲时间，带来黑暗或黎明。').gold().italic()])
        text.add(2, [Text.of(' ').gray().italic()])
        text.add(3, [Text.of('有10%的几率扭曲使用者的心智，使其').gray().italic(), Text.of('失去理智').darkRed().italic(), Text.of('。这种状态持续一分钟').gray().italic()])
    })
	event.addAdvanced('kubejs:blood_oath', (item, advanced, text) => {
        text.add(1, [Text.of('效果：').yellow(), Text.of('使用该道具会产生一个').white(), Text.of('起死回生').gold().italic(), Text.of('的效果').white()])
        text.add(2, Text.white(' ')),
        text.add(3, [Text.of('效果冷却：').gray(), Text.of('5分钟').darkGreen()])
    })

	event.addAdvanced('kubejs:summoners_gateway', (item, advanced, text) => {
        text.add(1, [Text.of('获得一个').white(), Text.of('永久捕获了所有动物灵魂').white(), Text.of('的召唤石').gold()])
        text.add(2, Text.white(' ')),
        text.add(3, [Text.of('效果冷却：').yellow(), Text.of('5分钟').darkGreen()])
    })
	event.addAdvanced('kubejs:taming_flute', (item, advanced, text) => {
		if (!event.shift) {
            text.add(1, [Text.of('按住 ').yellow(), Text.of('SHIFT ').gold(), Text.of('以查看').yellow(), Text.of('可驯服的动物').gold()])
		  } else {
            text.add(1, [Text.of('可驯服的动物').gold().underlined()])
            text.add(2, [Text.of(' > 驼鹿').yellow()])
            text.add(3, [Text.of(' > 雪豹').yellow()])
            text.add(4, [Text.of(' > 野牛').yellow()])
            text.add(5, [Text.of(' > 森蚺').yellow()])
            text.add(6, [Text.of(' > 悬熊').yellow()])
            text.add(7, [Text.of(' > 犀牛').yellow()])
            text.add(8, [Text.of(' > 老虎').yellow()])
            text.add(9, [Text.of(' > 獠牙兽').yellow()])
          }
        text.add(1, [Text.of('允许玩家驯服各种动物').gray()])
		text.add(2, Text.white(' '))
	});

	event.addAdvanced('kubejs:evasion_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 猎杀一名').white(), Text.of('穴居人（Cave Dweller）').darkRed()])
        text.add(3, [Text.of(' ').darkRed()])
        text.add(4, [Text.of('奖励：').gold().underlined()])
		text.add(5, [Text.of('闪避圣酿').aqua()])

	});

	event.addAdvanced('kubejs:speed_elixir_relic', (item, advanced, text) => {
		
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 给下列每个').white(), Text.of('生物').darkRed(), Text.of('喂食').darkGreen(), Text.of('5').gold(), Text.of('个').white(), Text.of('小村民').darkRed()])
        text.add(3, [Text.of(' ').red()])
        text.add(4, [Text.of('要求：').red()])
        text.add(5, [Text.of(' >  村民必须是小村民').gray()])
        text.add(6, [Text.of(' ').red()])
        text.add(7, [Text.of('奖励：').gold().underlined()])
		text.add(8, [Text.of('速度圣酿').aqua()])
		text.add(9, [Text.of(' ' ).green()])
		if (!event.shift) {
            text.add(10, [Text.of('按住 ').yellow(), Text.of('SHIFT ').gold(), Text.of('以查看').yellow(), Text.of('需要喂养').white(), Text.of('的生物').darkRed()])
		  } else {
            text.add(10, [Text.of('需要喂养的生物').gold().underlined().italic()])
            text.add(11, [Text.of('> 森蚺：').yellow(), Text.of('在').gray(), Text.of('沼泽').darkGreen(), Text.of('和').gray(), Text.of('红树林沼泽').darkGreen(), Text.of('中发现').gray()])
            text.add(12, [Text.of('> 轻语灵：').yellow(), Text.of('在').gray(), Text.of('地下').gray(), Text.of('Y: -30').blue(), Text.of('以下的').gray(),Text.of('洞穴').gold()])
			text.add(13, [Text.of('> 岩磙兽：').yellow(), Text.of('稀少出没于').gray(), Text.of(' 溶洞').gold()])
            text.add(14, [Text.of('> 灵魂鹫：').yellow(), Text.of('在').gray(), Text.of(' 下界中的').darkred(), Text.of('灵魂沙峡谷').darkRed(), Text.of('发现').gray()])
            text.add(15, [Text.of('> 鳄鱼：').yellow(), Text.of('在').gray(), Text.of(' 沼泽、红树林沼泽和河流中').darkGreen(), Text.of('发现').gray()])
          }
	});

	event.addAdvanced('kubejs:resistance_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 达到每个').white(), Text.of('悬赏').yellow(), Text.of('的第三级别要求').white()])
        text.add(3, [Text.of(' ').darkRed()])
        text.add(4, [Text.of('奖励：').gold().underlined()])
        text.add(5, [Text.of('抗性提升圣酿').aqua()])
		
	});

	event.addAdvanced('kubejs:regeneration_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 用你的').white(), Text.of('职业宠物').darkGreen(), Text.of('击杀').white(), Text.of('300只怪物').darkRed()])
		text.add(3, [Text.of(' ').darkRed()])
        text.add(4, [Text.of('奖励：').gold().underlined()])
        text.add(5, [Text.of('生命恢复圣酿').aqua()])
	});

	event.addAdvanced('kubejs:shadow_form_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 获得').white(), Text.of('阎魔刀（Yamato）').lightPurple().italic(), Text.of('并击杀').white(), Text.of('50只怪物').darkRed()])
        text.add(3, [Text.of(' ').red()])
        text.add(4, [Text.of('注意：').red(), Text.of('受到任何来源的5次伤害都将会导致失败')])
        text.add(5, [Text.of(' ').darkRed()])
        text.add(6, [Text.of('奖励：').gold().underlined()])
        text.add(7, [Text.of('止心圣酿').aqua()])
	});

	event.addAdvanced('kubejs:strength_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 击杀').white(), Text.of('100只猪灵蛮兵').darkRed(), Text.of('使用双持的').white(), Text.of('金斧').lightPurple().italic()])
        text.add(3, [Text.of(' ').darkRed()])
        text.add(4, [Text.of('奖励：').gold().underlined()])
        text.add(5, [Text.of('力量圣酿').aqua()])
	});

	event.addAdvanced('kubejs:endurance_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 不死的情况下击杀').white(), Text.of('150只怪物').darkRed()])
        text.add(3, [Text.of(' ').red()])
        text.add(4, [Text.of('要求：').red()])
        text.add(5, [Text.of(' > 一定要是晚上').gray()])
        text.add(6, [Text.of(' ').darkRed()])
        text.add(7, [Text.of('奖励：').gold().underlined()])
        text.add(8, [Text.of('额外耐力圣酿').aqua()])
	});

	event.addAdvanced('kubejs:fire_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of('> 使用').white(), Text.of('火焰法术').aqua().underlined(), Text.of('击杀').white(), Text.of('100只飞行怪物').darkRed().italic(), Text.of('（任何等级的魔法均可）').yellow()])
        text.add(3, [Text.of(' ').darkRed()])
        text.add(4, [Text.of('奖励：').gold().underlined()])
        text.add(5, [Text.of('龙息圣酿').aqua()])
	});

	event.addAdvanced('kubejs:absorption_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 获得任何 ').white(), Text.of('喷气背包').aqua().underlined().italic(), Text.of('和').white(), Text.of('火箭筒').aqua().underlined().italic(), Text.of('，在空中使用喷气背包，向鱼、鱿鱼等海洋生物发射地狱火。').white(), Text.of('需要100 海洋生物灵魂').darkRed()])
        text.add(3, [Text.of(' ').red()])
        text.add(4, [Text.of('要求：').red()])
        text.add(5, [Text.of(' >  在目标上方10格以上击杀才算数').gray()])
        text.add(6, [Text.of(' >  在整个挑战过程中使用喷气背包保持飞行状态').gray()])
        text.add(7, [Text.of(' ').darkRed()])
        text.add(8, [Text.of('奖励：').gold().underlined()])
        text.add(9, [Text.of('伤害吸收圣酿').aqua()])
	});

	event.addAdvanced('kubejs:charged_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 使用').white(), Text.of('法术').aqua(), Text.of('击杀').white(), Text.of('500名敌人').red(), Text.of('（任何等级的魔法均可）').yellow()])
        text.add(3, [Text.of(' ').darkRed()])
        text.add(4, [Text.of('奖励：').gold().underlined()])
        text.add(5, [Text.of('超负荷圣酿').aqua()])
	});

	event.addAdvanced('kubejs:soul_steal_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 在黑暗的掩护下进入村庄，使用').white(), Text.of('霰弹枪').aqua(), Text.of('获取').white(), Text.of('50个睡着的村民').darkRed(), Text.of('的灵魂').white()])
        text.add(3, [Text.of(' ').red()])
        text.add(4, [Text.of('要求：').red()])
        text.add(5, [Text.of(' >  村民必须躺在床上，杀掉才算数').gray()])
        text.add(6, [Text.of(' >  只能在夜间获得击杀数').gray()])
        text.add(7, [Text.of(' ').darkRed()])
        text.add(8, [Text.of('奖励：').gold().underlined()])
        text.add(9, [Text.of('灵魂窃取圣酿').aqua()])
	})

	event.addAdvanced('kubejs:angel_wings_elixir_relic', (item, advanced, text) => {
        text.add(1, [Text.of('挑战：').gold().underlined()])
        text.add(2, [Text.of(' > 获得任意').white(), Text.of(' 滑翔伞').lightPurple(), Text.of('和').white(), Text.of('榴弹发射器').lightPurple(), Text.of('，在滑翔伞飞行时，使用 ').white(), Text.of('榴弹发射器击杀').white(),Text.of('150名敌人').darkRed()])
        text.add(3, [Text.of(' ').red()])
        text.add(4, [Text.of('要求：').red()])
        text.add(5, [Text.of(' >  你必须在目标上方10格以上击杀才算数').gray()])
        text.add(6, [Text.of(' >  必须在滑翔中击杀才算数').gray()])
        text.add(7, [Text.of(' ').darkRed()])
        text.add(8, [Text.of('奖励：').gold().underlined()])
        text.add(9, [Text.of('天使之翼圣酿').aqua()])
	});

	bone_effigy.forEach((effigy) => {
		event.addAdvanced(`kubejs:${effigy}_bone_effigy`, (item, advanced, text) => {
			text.add(1, [Text.of('收集并使用').gray(), Text.of('10').yellow(), Text.of('个以获得').gray(), Text.of('召唤石').gold()])
		});
	});

	event.addAdvanced('kubejs:high_value_target', (item, advanced, text) => {
		text.add(1, [Text.of('高价悬赏目标').gold(), Text.of(' 消灭特别危险的敌人后，赏金单会给你丰厚的奖励').white()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('要求：').red(), Text.of('你必须在夜间击杀目标。').gray().italic().underlined()])
		text.add(4, [Text.of(' ').red()])
		if (!event.alt) {
			text.add(5, [Text.of('按住 ').yellow(), Text.of('ALT ').gold(), Text.of('以查看额外').yellow(), Text.of('说明').lightPurple()])
			} else {
			text.add(5, [Text.of('高价悬赏目标').gold(), Text.of('是赏金单从更难对付的敌人名单中随机选择出来的。完成后，他们的').white(), Text.of('赏金计数器').red(), Text.of('会加').white(), Text.of('1').darkGreen(), Text.of('。因此当再次随机选择同一实体时，您需要打败它更多次。但是，').white(), Text.of('每消灭一个实体，').white(), Text.of('硬币奖励').yellow().italic(), Text.of('都会大大增加').white()])
		}
		text.add(6, [Text.of(' ').red()])

		if (!event.shift) {
			text.add(7, [Text.of('按住 ').yellow(), Text.of('SHIFT ').gold(), Text.of('以查看所有可能的').yellow(), Text.of('目标').darkRed()])
			} else {
				text.add(7, [Text.of('可能的目标：').darkRed().underlined()])
				text.add(8, [Text.of(' > 突变生物').gold().italic()])
				text.add(9, [Text.of(' > 骨架').gold().italic()])
				text.add(9, [Text.of(' > 重击者').gold().italic()])
				text.add(9, [Text.of(' > 远古骑士').gold().italic()])
				text.add(9, [Text.of(' > 狂暴骑士').gold().italic()])
				text.add(9, [Text.of(' > 高阶骷髅召唤师').gold().italic()])
				text.add(9, [Text.of(' > 渊灵垂钓者').gold().italic()])
				text.add(9, [Text.of(' > 皮行者（Skin Walker）').gold().italic()])
				text.add(9, [Text.of(' > 鹿角温迪戈').gold().italic()])
				text.add(9, [Text.of(' > 高位唤魔者').gold().italic()])
				text.add(9, [Text.of(' > 溺尸死灵法师').gold().italic()])
			};
		});

	event.addAdvanced('kubejs:mindshatter_orb', (item, advanced, text) => {
		text.add(1, [Text.of('凝视').gray(), Text.of('颤心球').darkPurple().italic(), Text.of('让自己陷入疯狂的深渊。你将获得失去理智时才有的力量，但也会被难以言喻的恐怖所追杀。').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('失去理智的效果：').gold().italic()])
		text.add(4, [Text.of(' > 速度提升').darkAqua()])
		text.add(5, [Text.of(' > 攻击速度提升').darkAqua()])
		text.add(6, [Text.of(' > 冷却：').red(), Text.of('20秒').green()])
		text.add(7, [Text.of(' ').red()])
		text.add(8, [Text.of('当失去理智效果结束时，你将被传送回激活它的地方。').yellow()])
	});


	event.addAdvanced('kubejs:spirit_crystal', (item, advanced, text) => {
		text.add(1, [Text.of('副手持有').gold(), Text.of('灵魂水晶').darkPurple().italic(), Text.of('，就能捕捉到被杀实体的灵魂。').gold()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('使用').gray(), Text.of('杀戮宝珠').red().italic(), Text.of('，就可以将捕获的实体作为').gray(), Text.of('友军').darkGreen(), Text.of('以其').gray(), Text.of('灵魂').aqua().italic(), Text.of('作为代价').gray()])
	});

	event.addAdvanced('kubejs:orb_of_slaughtered_foes', (item, advanced, text) => {
        text.add(1, [Text.of('消耗').gold(), Text.of('灵魂').aqua(), Text.of('召唤困在你').gold(), Text.of('灵魂水晶').darkPurple().italic(), Text.of('中的生物').gold()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('警告：').red(), Text.of('有些生物天生敌视其他生物，即使它们都属于你。').gray()])
	});


	event.addAdvanced('kubejs:lesser_summoning_disc', (item, advanced, text) => {
		text.add(1, [Text.of('将敌对生物召唤为盟友。').gray()])
		text.add(2, [Text.of(' ').red()])
		if (!event.shift) {
			text.add(3, [Text.of('按住 ').yellow(), Text.of('SHIFT ').gold(), Text.of('以查看所有可能的').yellow(), Text.of('召唤物').darkRed()])
			} else {
				text.add(3, [Text.of('骨架').red()])
				text.add(3, [Text.of('高阶骷髅召唤师').red()])
				text.add(3, [Text.of('高位唤魔者').red()])
				text.add(3, [Text.of('地卜师').red()])
				text.add(3, [Text.of('幻术师').red()])
				text.add(3, [Text.of('巫师').red()])
				text.add(3, [Text.of('冰术师').red()])
				text.add(3, [Text.of('登山者').red()])
				text.add(3, [Text.of('皇家守卫').red()])
				text.add(3, [Text.of('唤风者').red()])
				text.add(3, [Text.of('弓箭手').red()])
				text.add(3, [Text.of('突袭者').red()])
				text.add(3, [Text.of('重装军').red()])
				text.add(3, [Text.of('冰霜术士').red()])
				text.add(3, [Text.of('炽焰术师').red()])
				text.add(3, [Text.of('死灵法师').red()])
				text.add(3, [Text.of('灵魂巫师（Soul Wizard）').red()])
				text.add(3, [Text.of('猪灵掷菌手').red()])
				text.add(3, [Text.of('无头爵士').red()])
				text.add(3, [Text.of('绯红幽灵').red()])
				text.add(3, [Text.of('骷髅爆破手').red()])
				text.add(3, [Text.of('冰霜术士').red()])
				text.add(3, [Text.of('寒吟雪熊').red()])
				text.add(3, [Text.of('哨兵蟹').red()])
			};
	});


	event.addAdvanced('kubejs:superior_summoning_disc', (item, advanced, text) => {
		text.add(1, [Text.of('将敌对生物召唤为盟友。').gray()])
		text.add(2, [Text.of(' ').red()])
		if (!event.shift) {
			text.add(3, [Text.of('按住 ').yellow(), Text.of('SHIFT ').gold(), Text.of('以查看所有可能的').yellow(), Text.of('召唤物').darkRed()])
			} else {
				text.add(3, [Text.of('古代骑士').red()])
				text.add(3, [Text.of('狂暴骑士').red()])
				text.add(3, [Text.of('爆破灵').red()])
				text.add(3, [Text.of('迷惑灵').red()])
				text.add(3, [Text.of('看守灵').red()])
				text.add(3, [Text.of('重击者').red()])
				text.add(3, [Text.of('渊灵垂钓者').red()])
				text.add(3, [Text.of('渊灵蛮兵').red()])
				text.add(3, [Text.of('腾跃之叶').red()])
				text.add(3, [Text.of('唤浪者').red()])
				text.add(3, [Text.of('野火（Wildfire）').red()])
				text.add(3, [Text.of('幽鬼体').red()])
				text.add(3, [Text.of('骇狼首领（Dire Hound Leader）').red()])
			}
		});
	event.addAdvanced('kubejs:paramount_summoning_disc', (item, advanced, text) => {
		text.add(1, [Text.of('将敌对生物召唤为盟友。').gray()])
		text.add(2, [Text.of(' ').red()])
		if (!event.shift) {
			text.add(3, [Text.of('按住 ').yellow(), Text.of('SHIFT ').gold(), Text.of('以查看所有可能的').yellow(), Text.of('召唤物').darkRed()])
			} else {
				text.add(3, [Text.of('突变苦力怕').red()])
				text.add(3, [Text.of('突变骷髅').red()])
				text.add(3, [Text.of('突变僵尸').red()])
				text.add(3, [Text.of('突变末影人').red()])
			};
	});

	event.addAdvanced('kubejs:lesser_elixir_shard', (item, advanced, text) => {
		text.add(1, [Text.of('+1%').green(), Text.of('受到伤害时').gray(), Text.of('圣酿').lightPurple(), Text.of('激活的几率').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('获取方式： ').red()])
		text.add(4, [Text.of(' - 普通赏金战利品箱').gold()])
	});

	event.addAdvanced('kubejs:superior_elixir_shard', (item, advanced, text) => {
		text.add(1, [Text.of('+2%').green(), Text.of('受到伤害时').gray(), Text.of('圣酿').lightPurple(), Text.of('激活的几率').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('获取方式： ').red()])
		text.add(4, [Text.of(' - 不凡赏金战利品箱').gold()])
	});

	event.addAdvanced('kubejs:paramount_elixir_shard', (item, advanced, text) => {
		text.add(1, [Text.of('+3%').green(), Text.of('受到伤害时').gray(), Text.of('圣酿').lightPurple(), Text.of('激活的几率').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('获取方式： ').red()])
		text.add(4, [Text.of(' - 稀有赏金战利品箱').gold()])
	});

	event.addAdvanced('kubejs:exalted_elixir_shard', (item, advanced, text) => {
		text.add(1, [Text.of('+5%').green(), Text.of('受到伤害时').gray(), Text.of('圣酿').lightPurple(), Text.of('激活的几率').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('获取方式： ').red()])
		text.add(4, [Text.of(' - 击杀Boss').gold()])
	});

	event.addAdvanced(`kubejs:evasion_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('闪避').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' >').gray(), Text.of('无').red()])
	});
	
	event.addAdvanced(`kubejs:speed_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('速度').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('击杀敌人时，它们会获得 ').gray(), Text.of('速度 II效果').lightPurple(), Text.of('10秒').green()])
	});

	event.addAdvanced(`kubejs:resistance_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('抗性提升').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('的生命值降至 75% 以下时，它们将获得 ').gray(), Text.of('抗性提升II效果').lightPurple(), Text.of('3秒').green()])
		text.add(7, [Text.of(' >').gray(), Text.of(' 冷却：').red(), Text.of('1分钟').gold()])
	});

	event.addAdvanced(`kubejs:regeneration_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('生命恢复').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('的生命值降至80%以下时，它们将获得').gray(), Text.of('生命回复II 效果').lightPurple(), Text.of('3秒').green()])
		text.add(7, [Text.of(' >').gray(), Text.of(' 冷却：').red(), Text.of('1分钟').gold()])
	});

	event.addAdvanced(`kubejs:strength_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('力量').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('连续命中5次，他们将获得').gray(), Text.of('力量效果').lightPurple(), Text.of('3秒').green()])
	});

	event.addAdvanced(`kubejs:endurance_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('额外耐力').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' >').gray(), Text.of('无').red()])
	});

	event.addAdvanced(`kubejs:absorption_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('伤害吸收').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('的生命值降至80%以下时，').gray(), Text.of('他们将获得').gray(), Text.of('伤害吸收效果').lightPurple(), Text.of('10秒').green()])
		text.add(7, [Text.of(' >').gray(), Text.of(' 冷却：').red(), Text.of('1分钟').gold()])
	});

	event.addAdvanced(`kubejs:charged_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('超负荷').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('的生命值降至20%以下时，').gray(), Text.of('它们会召唤一束').gray(), Text.of('闪电').yellow(), Text.of('击中攻击者。').gray()])
		text.add(7, [Text.of(' >').gray(), Text.of(' 冷却：').red(), Text.of('1分钟').gold()])
	});

	event.addAdvanced(`kubejs:angel_wings_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('天使之翼').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('的生命值降至15%以下时，').gray(), Text.of('它们会将攻击者击飞。').gray()])
		text.add(7, [Text.of(' >').gray(), Text.of(' 冷却：').red(), Text.of('1分钟').gold()])
	});

	event.addAdvanced(`kubejs:soul_steal_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('灵魂窃取').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' >').gray(), Text.of('友军生物').yellow(), Text.of('会获得').gray(), Text.of('永久的').green(), Text.of('灵魂窃取').lightPurple(), Text.of('效果').gray()])
	});

	event.addAdvanced(`kubejs:fire_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('焰息').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('的生命值降至40%以下时，它们将会获得').gray(), Text.of('焰息').lightPurple(), Text.of('效果').gray(), Text.of('1秒').green()])
		text.add(7, [Text.of(' >').gray(), Text.of(' 冷却：').red(), Text.of('1分钟').gold()])
	});

	event.addAdvanced(`kubejs:shadow_form_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('玩家效果：').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of('受到伤害时触发').gray(), Text.of('止心术').lightPurple(), Text.of('效果的几率').gray()])
		text.add(3, [Text.of(' > 收集').gray(), Text.of('圣酿碎片').yellow(), Text.of('以增加触发效果的几率。').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('友军生物效果：').gold().italic()])
		text.add(6, [Text.of(' > 当').gray(), Text.of('友军生物').blue(), Text.of('击杀敌人后，它们将会获得').gray(), Text.of('隐身').lightPurple(), Text.of('效果').gray(), Text.of('5秒').green()])

	});

	event.addAdvanced('kubejs:common_beastmaster_totem', (item, advanced, text) => {
		text.add(1, [Text.of('可驯服').gold(), Text.of('最大生命值为').gold(), Text.of('25').green(), Text.of('及以下').gold(), Text.of('的动物').darkGreen()])
		text.add(2, [Text.of(' > 冷却：').gray(), Text.of('1分钟').red()])
		text.add(3, [Text.of(' > 驯兽师副职业').darkAqua(), Text.of(' 冷却：').gray(), Text.of('30秒').red()])
	});

	event.addAdvanced('kubejs:uncommon_beastmaster_totem', (item, advanced, text) => {
		text.add(1, [Text.of('可驯服').gold(), Text.of('最大生命值为').gold(), Text.of('50').green(), Text.of('及以下').gold(), Text.of('的动物').darkGreen()])
		text.add(2, [Text.of(' > 冷却：').gray(), Text.of('2分钟').red()])
		text.add(3, [Text.of(' > 驯兽师副职业').darkAqua(), Text.of(' 冷却：').gray(), Text.of('45秒').red()])
	});

	event.addAdvanced('kubejs:rare_beastmaster_totem', (item, advanced, text) => {
		text.add(1, [Text.of('可驯服').gold(), Text.of('任何动物').darkGreen()])
		text.add(2, [Text.of(' > 冷却：').gray(), Text.of('3分钟').red()])
		text.add(3, [Text.of(' > ').gray(), Text.of('野兽大师副职业').darkAqua(), Text.of(' 冷却：').gray(), Text.of('1分钟').red()])
	});
	
	event.addAdvanced('kubejs:breakfall', (item, advanced, text) => {
		text.add(1, [Text.of('解锁跑酷技能：').gold().underlined()])
		text.add(2, [Text.of(' > 缓冲技').lightPurple().italic()])
		text.add(3, [Text.of(' ').gray().italic()])
		text.add(4, [Text.of('提示：读你的').gray(), Text.of('跑酷指南').aqua(), Text.of('以了解这个技能。').gray()])
	});

	event.addAdvanced('kubejs:catleap', (item, advanced, text) => {
		text.add(1, [Text.of('解锁跑酷技能：').gold().underlined()])
		text.add(2, [Text.of(' > 猫扑').lightPurple().italic()])
		text.add(3, [Text.of(' ').gray().italic()])
		text.add(4, [Text.of('提示：读你的').gray(), Text.of('跑酷指南').aqua(), Text.of('以了解这个技能。').gray()])
		
	});

	event.addAdvanced('kubejs:ledgegrab', (item, advanced, text) => {
		text.add(1, [Text.of('解锁跑酷技能：').gold().underlined()])
		text.add(2, [Text.of(' > 壁架抓取').lightPurple().italic()])
		text.add(3, [Text.of(' > 攀爬').lightPurple().italic()])
		text.add(4, [Text.of(' > 滑墙').lightPurple().italic()])
		text.add(5, [Text.of(' > 墙跳').lightPurple().italic()])
		text.add(6, [Text.of(' ').gray().italic()])
		text.add(7, [Text.of('提示：读你的').gray(), Text.of('跑酷指南').aqua(), Text.of('以了解这些技能。').gray()])
	});

	event.addAdvanced('kubejs:crawl', (item, advanced, text) => {
		text.add(1, [Text.of('解锁跑酷技能：').gold().underlined()])
		text.add(2, [Text.of(' > 爬行').lightPurple().italic()])
		text.add(3, [Text.of(' > 滑行').lightPurple().italic()])
		text.add(4, [Text.of(' ').gray().italic()])
		text.add(5, [Text.of('提示：读你的').gray(), Text.of('跑酷指南').aqua(), Text.of('以了解这些技能。').gray()])
	});

	event.addAdvanced('kubejs:vertical_wallrun', (item, advanced, text) => {
		text.add(1, [Text.of('解锁跑酷技能：').gold().underlined()])
		text.add(2, [Text.of(' > 蹬壁上墙（踩墙跳）').lightPurple().italic()])
		text.add(3, [Text.of(' ').gray().italic()])
		text.add(4, [Text.of('提示：读你的').gray(), Text.of('跑酷指南').aqua(), Text.of('以了解这个技能。').gray()])
	});


	event.addAdvanced('kubejs:horizontal_wallrun', (item, advanced, text) => {
		text.add(1, [Text.of('解锁跑酷技能：').gold().underlined()])
		text.add(2, [Text.of(' > 水平跑墙').lightPurple().italic()])
		text.add(3, [Text.of(' ').gray().italic()])
		text.add(4, [Text.of('提示：读你的').gray(), Text.of('跑酷指南').aqua(), Text.of('以了解这个技能。').gray()])
	});

})











