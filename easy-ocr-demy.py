import easyocr

# 需要修改框架的一个参数
# 加载 EasyOCR 模型，设置识别语言和 GPU 使用情况
reader = easyocr.Reader(['en', 'ch_sim'], gpu=True)

# 读取图片文件，并进行 OCR 识别
results = reader.readtext('id_card.jpg')

# 输出识别结果
for result in results:
    print(result[1])
