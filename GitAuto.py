## Main processing

from datetime import datetime
import time
import warnings
warnings.filterwarnings('ignore')

while True :
    오늘 = datetime.today().strftime("%Y%m%d")
    작동시간 = datetime.today().now().hour
    작동분 = datetime.today().now().minute
    현재시각 = str(datetime.today().now())
    
    if 작동시간 < 8 :
        break
    
    else :
        import subprocess
        subprocess.call([r'GitAutoPush.bat'])
        subprocess.call([r'D:\aox\GitAutoPush.bat'])
        멈춤 = 60 * 10
        time.sleep(멈춤)
        continue