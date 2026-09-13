// 侧边栏（由脚本从文档结构生成，中文按 SUMMARY.md，英文标签沿用原 mdBook 英文目录）
export const sidebarZh = [
  {
    "text": "资源包",
    "link": "/respack/"
  },
  {
    "text": "谱面标准",
    "items": [
      {
        "text": "谱面信息",
        "link": "/chart-standard/chartinfo"
      }
    ]
  },
  {
    "text": "谱面管理",
    "items": [
      {
        "text": "谱面上传指南",
        "link": "/chart-management/upload-guide"
      },
      {
        "text": "审核与上架指南",
        "link": "/chart-management/review-and-stable"
      },
      {
        "text": "协作者功能",
        "link": "/chart-management/collaborator"
      }
    ]
  },
  {
    "text": "谱面文件格式",
    "items": [
      {
        "text": "RPE",
        "items": [
          {
            "text": "谱面根目录",
            "link": "/chart-standard/chart-format/rpe/root"
          },
          {
            "text": "判定线",
            "link": "/chart-standard/chart-format/rpe/judgeLine"
          },
          {
            "text": "beat",
            "link": "/chart-standard/chart-format/rpe/beat"
          },
          {
            "text": "音符",
            "link": "/chart-standard/chart-format/rpe/note"
          },
          {
            "text": "普通事件",
            "link": "/chart-standard/chart-format/rpe/event"
          },
          {
            "text": "特殊事件",
            "link": "/chart-standard/chart-format/rpe/extendEvent"
          },
          {
            "text": "扩展特性",
            "link": "/chart-standard/chart-format/rpe/extend"
          },
          {
            "text": "Controls",
            "link": "/chart-standard/chart-format/rpe/controls"
          }
        ]
      },
      {
        "text": "PE",
        "items": [
          {
            "text": "基本信息",
            "link": "/chart-standard/chart-format/pe/basic"
          },
          {
            "text": "事件",
            "link": "/chart-standard/chart-format/pe/event"
          },
          {
            "text": "音符",
            "link": "/chart-standard/chart-format/pe/note"
          }
        ]
      },
      {
        "text": "Official",
        "items": [
          {
            "text": "谱面根目录",
            "link": "/chart-standard/chart-format/phi/root"
          },
          {
            "text": "音符",
            "link": "/chart-standard/chart-format/phi/note"
          },
          {
            "text": "事件",
            "link": "/chart-standard/chart-format/phi/event"
          },
          {
            "text": "判定线",
            "link": "/chart-standard/chart-format/phi/judgeLine"
          }
        ]
      },
      {
        "text": "音乐文件格式",
        "link": "/chart-standard/music"
      },
      {
        "text": "扩展特性",
        "items": [
          {
            "text": "特效",
            "items": [
              {
                "text": "内置着色器",
                "items": [
                  {
                    "text": "`chromatic`",
                    "link": "/chart-standard/extra/effect/builtin/chromatic"
                  },
                  {
                    "text": "`circleBlur`",
                    "link": "/chart-standard/extra/effect/builtin/circleBlur"
                  },
                  {
                    "text": "`fisheye`",
                    "link": "/chart-standard/extra/effect/builtin/fisheye"
                  },
                  {
                    "text": "`glitch`",
                    "link": "/chart-standard/extra/effect/builtin/glitch"
                  },
                  {
                    "text": "`grayscale`",
                    "link": "/chart-standard/extra/effect/builtin/grayscale"
                  },
                  {
                    "text": "`noise`",
                    "link": "/chart-standard/extra/effect/builtin/noise"
                  },
                  {
                    "text": "`pixel`",
                    "link": "/chart-standard/extra/effect/builtin/pixel"
                  },
                  {
                    "text": "`radialBlur`",
                    "link": "/chart-standard/extra/effect/builtin/radialBlur"
                  },
                  {
                    "text": "`shockwave`",
                    "link": "/chart-standard/extra/effect/builtin/shockwave"
                  },
                  {
                    "text": "`vignette`",
                    "link": "/chart-standard/extra/effect/builtin/vignette"
                  }
                ]
              },
              {
                "text": "自行编写着色器",
                "link": "/chart-standard/extra/effect/custom-shader"
              }
            ]
          },
          {
            "text": "视频背景",
            "link": "/chart-standard/extra/video/"
          }
        ]
      },
      {
        "text": "解锁动画",
        "link": "/chart-standard/unlock_video/"
      }
    ]
  },
  {
    "text": "活动指南",
    "link": "/event/"
  },
  {
    "text": "UML文档",
    "items": [
      {
        "text": "语法",
        "items": [
          {
            "text": "坐标",
            "link": "/uml/syntax/coordinate"
          },
          {
            "text": "数据类型",
            "link": "/uml/syntax/type"
          },
          {
            "text": "表达式",
            "link": "/uml/syntax/expression"
          },
          {
            "text": "变量",
            "link": "/uml/syntax/variable"
          },
          {
            "text": "元素",
            "items": [
              {
                "text": "段落元素 `p`",
                "link": "/uml/syntax/elements/p"
              },
              {
                "text": "图片元素 `img`",
                "link": "/uml/syntax/elements/img"
              },
              {
                "text": "谱面合集元素 `col`",
                "link": "/uml/syntax/elements/col"
              },
              {
                "text": "按钮元素 `btn`",
                "link": "/uml/syntax/elements/btn"
              }
            ]
          },
          {
            "text": "注释",
            "link": "/uml/syntax/comment"
          },
          {
            "text": "注释表达式",
            "link": "/uml/syntax/comment_expression"
          }
        ]
      },
      {
        "text": "如何调试",
        "link": "/uml/debugging"
      },
      {
        "text": "样例 UML",
        "items": [
          {
            "text": "模板活动",
            "link": "/uml/examples/template_event"
          },
          {
            "text": "2024 圣诞夜惊魂",
            "link": "/uml/examples/xmas-2024"
          }
        ]
      },
      {
        "text": "使用进阶",
        "items": [
          {
            "text": "页面切换",
            "link": "/uml/advanced/page_switch"
          }
        ]
      }
    ]
  },
  {
    "text": "构建指南",
    "items": [
      {
        "text": "Windows 构建",
        "link": "/phira_build_guide/Windows"
      },
      {
        "text": "cargo 安装教程",
        "link": "/phira_build_guide/cargo"
      },
      {
        "text": "静态库（prpr-avc）",
        "link": "/phira_build_guide/StaticLib"
      },
      {
        "text": "Windows GNU",
        "link": "/phira_build_guide/Windows_Gnu"
      },
      {
        "text": "Windows MSVC",
        "link": "/phira_build_guide/Windows_Msvc"
      },
      {
        "text": "Linux",
        "link": "/phira_build_guide/Linux"
      },
      {
        "text": "macOS",
        "link": "/phira_build_guide/macOS"
      },
      {
        "text": "iOS",
        "link": "/phira_build_guide/iOS"
      },
      {
        "text": "Android",
        "link": "/phira_build_guide/Android"
      },
      {
        "text": "OpenHarmony",
        "link": "/phira_build_guide/OpenHarmony"
      }
    ]
  },
  {
    "text": "改动内容",
    "collapsed": true,
    "items": [
      {
        "text": "与 Phira 的区别",
        "link": "/changes/"
      },
      {
        "text": "版本更新记录",
        "link": "/changes/changelog"
      }
    ]
  }
]

export const sidebarEn = [
  {
    "text": "Respack",
    "link": "/en/respack/"
  },
  {
    "text": "谱面标准",
    "collapsed": true,
    "items": [
      {
        "text": "谱面信息",
        "link": "/en/chart-standard/chartinfo"
      }
    ]
  },
  {
    "text": "谱面管理",
    "collapsed": true,
    "items": [
      {
        "text": "谱面上传指南",
        "link": "/en/chart-management/upload-guide"
      },
      {
        "text": "审核与上架指南",
        "link": "/en/chart-management/review-and-stable"
      },
      {
        "text": "协作者功能",
        "link": "/en/chart-management/collaborator"
      }
    ]
  },
  {
    "text": "谱面文件格式",
    "collapsed": true,
    "items": [
      {
        "text": "RPE",
        "collapsed": true,
        "items": [
          {
            "text": "谱面根目录",
            "link": "/en/chart-standard/chart-format/rpe/root"
          },
          {
            "text": "判定线",
            "link": "/en/chart-standard/chart-format/rpe/judgeLine"
          },
          {
            "text": "beat",
            "link": "/en/chart-standard/chart-format/rpe/beat"
          },
          {
            "text": "音符",
            "link": "/en/chart-standard/chart-format/rpe/note"
          },
          {
            "text": "普通事件",
            "link": "/en/chart-standard/chart-format/rpe/event"
          },
          {
            "text": "特殊事件",
            "link": "/en/chart-standard/chart-format/rpe/extendEvent"
          },
          {
            "text": "扩展特性",
            "link": "/en/chart-standard/chart-format/rpe/extend"
          },
          {
            "text": "Controls",
            "link": "/en/chart-standard/chart-format/rpe/controls"
          }
        ]
      },
      {
        "text": "PE",
        "collapsed": true,
        "items": [
          {
            "text": "基本信息",
            "link": "/en/chart-standard/chart-format/pe/basic"
          },
          {
            "text": "事件经过",
            "link": "/en/chart-standard/chart-format/pe/event"
          },
          {
            "text": "音符",
            "link": "/en/chart-standard/chart-format/pe/note"
          }
        ]
      },
      {
        "text": "Official",
        "collapsed": true,
        "items": [
          {
            "text": "谱面根目录",
            "link": "/en/chart-standard/chart-format/phi/root"
          },
          {
            "text": "音符",
            "link": "/en/chart-standard/chart-format/phi/note"
          },
          {
            "text": "事件经过",
            "link": "/en/chart-standard/chart-format/phi/event"
          },
          {
            "text": "判定线",
            "link": "/en/chart-standard/chart-format/phi/judgeLine"
          }
        ]
      },
      {
        "text": "音乐文件格式",
        "link": "/en/chart-standard/music"
      },
      {
        "text": "扩展特性",
        "collapsed": true,
        "items": [
          {
            "text": "特效",
            "collapsed": true,
            "items": [
              {
                "text": "内置着色器",
                "collapsed": true,
                "items": [
                  {
                    "text": "chromatic",
                    "link": "/en/chart-standard/extra/effect/builtin/chromatic"
                  },
                  {
                    "text": "circleBlur",
                    "link": "/en/chart-standard/extra/effect/builtin/circleBlur"
                  },
                  {
                    "text": "fisheye",
                    "link": "/en/chart-standard/extra/effect/builtin/fisheye"
                  },
                  {
                    "text": "glitch",
                    "link": "/en/chart-standard/extra/effect/builtin/glitch"
                  },
                  {
                    "text": "grayscale",
                    "link": "/en/chart-standard/extra/effect/builtin/grayscale"
                  },
                  {
                    "text": "noise",
                    "link": "/en/chart-standard/extra/effect/builtin/noise"
                  },
                  {
                    "text": "pixel",
                    "link": "/en/chart-standard/extra/effect/builtin/pixel"
                  },
                  {
                    "text": "radialBlur",
                    "link": "/en/chart-standard/extra/effect/builtin/radialBlur"
                  },
                  {
                    "text": "shockwave",
                    "link": "/en/chart-standard/extra/effect/builtin/shockwave"
                  },
                  {
                    "text": "vignette",
                    "link": "/en/chart-standard/extra/effect/builtin/vignette"
                  }
                ]
              },
              {
                "text": "Writing your own shaders",
                "link": "/en/chart-standard/extra/effect/custom-shader"
              }
            ]
          },
          {
            "text": "Video Background",
            "link": "/en/chart-standard/extra/video/"
          }
        ]
      },
      {
        "text": "Unlock animation",
        "link": "/en/chart-standard/unlock_video/"
      }
    ]
  },
  {
    "text": "活动指南",
    "link": "/en/event/"
  },
  {
    "text": "UML文档",
    "collapsed": true,
    "items": [
      {
        "text": "语法",
        "collapsed": true,
        "items": [
          {
            "text": "Coordinates",
            "link": "/en/uml/syntax/coordinate"
          },
          {
            "text": "Data type",
            "link": "/en/uml/syntax/type"
          },
          {
            "text": "Expression",
            "link": "/en/uml/syntax/expression"
          },
          {
            "text": "Variable",
            "link": "/en/uml/syntax/variable"
          },
          {
            "text": "元素",
            "collapsed": true,
            "items": [
              {
                "text": "Paragraph Element p",
                "link": "/en/uml/syntax/elements/p"
              },
              {
                "text": "Image Element img",
                "link": "/en/uml/syntax/elements/img"
              },
              {
                "text": "Chart Collection Element col",
                "link": "/en/uml/syntax/elements/col"
              },
              {
                "text": "Button Element btn",
                "link": "/en/uml/syntax/elements/btn"
              }
            ]
          },
          {
            "text": "Comment",
            "link": "/en/uml/syntax/comment"
          },
          {
            "text": "Comment Expression",
            "link": "/en/uml/syntax/comment_expression"
          }
        ]
      },
      {
        "text": "How to Debug",
        "link": "/en/uml/debugging"
      },
      {
        "text": "样例 UML",
        "collapsed": true,
        "items": [
          {
            "text": "Event Template",
            "link": "/en/uml/examples/template_event"
          },
          {
            "text": "2024 Xmas",
            "link": "/en/uml/examples/xmas-2024"
          }
        ]
      },
      {
        "text": "使用进阶",
        "collapsed": true,
        "items": [
          {
            "text": "Page Switch",
            "link": "/en/uml/advanced/page_switch"
          }
        ]
      }
    ]
  },
  {
    "text": "Build guide",
    "collapsed": true,
    "items": [
      {
        "text": "Windows",
        "link": "/en/phira_build_guide/Windows"
      },
      {
        "text": "cargo 安装教程",
        "link": "/en/phira_build_guide/cargo"
      },
      {
        "text": "静态库（prpr-avc）",
        "link": "/en/phira_build_guide/StaticLib"
      },
      {
        "text": "Windows GNU",
        "link": "/en/phira_build_guide/Windows_Gnu"
      },
      {
        "text": "Windows MSVC",
        "link": "/en/phira_build_guide/Windows_Msvc"
      },
      {
        "text": "Linux",
        "link": "/en/phira_build_guide/Linux"
      },
      {
        "text": "macOS",
        "link": "/en/phira_build_guide/macOS"
      },
      {
        "text": "iOS",
        "link": "/en/phira_build_guide/iOS"
      },
      {
        "text": "Android",
        "link": "/en/phira_build_guide/Android"
      },
      {
        "text": "OpenHarmony",
        "link": "/en/phira_build_guide/OpenHarmony"
      }
    ]
  },
  {
    "text": "Changes",
    "collapsed": true,
    "items": [
      {
        "text": "Differences from Phira",
        "link": "/en/changes/"
      },
      {
        "text": "Release notes",
        "link": "/en/changes/changelog"
      }
    ]
  }
]
