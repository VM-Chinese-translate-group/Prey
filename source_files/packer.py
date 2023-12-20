import os
import json
import subprocess
import zipfile


def zipDir(dirpath, output_path):
    zip = zipfile.ZipFile(output_path, "w", zipfile.ZIP_DEFLATED)
    for path, dirnames, filenames in os.walk(dirpath):
        # 去掉目标跟路径，只对目标文件夹下边的文件及文件夹进行压缩
        fpath = path.replace(dirpath, '')
 
        for filename in filenames:
            zip.write(os.path.join(path, filename), os.path.join(fpath, filename))
    zip.close()

def run_packaging():
    # 读取packer_config.json文件
    with open('source_files/packer_config.json', 'r') as f:
        config = json.load(f)
    
    # 获取要打包的内容或路径
    content = config.get('content')
    # 获取打包结果的输出路径
    output_path = config.get('output_path')
    zipDir(content, output_path)

if __name__ == '__main__':
    run_packaging()
