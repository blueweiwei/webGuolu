round(a, 3)
def form1(self):
        self.data['0']['C4']=round((0.124*self.data['0']['C3']*100)/(100+0.124*self.data['0']['C3']),3)
        self.data['0']['C8']=round((100-self.data['0']['C4'])*self.data['0']['C7']/100,3)
        self.data['0']['D8']=round((100-self.data['0']['C4'])*self.data['0']['D7']/100,3)
        self.data['0']['E8']=round((100-self.data['0']['C4'])*self.data['0']['E7']/100,3)
        self.data['0']['F8']=round((100-self.data['0']['C4'])*self.data['0']['F7']/100,3)
        self.data['0']['G8']=round((100-self.data['0']['C4'])*self.data['0']['G7']/100,3)
        self.data['0']['H8']=round((100-self.data['0']['C4'])*self.data['0']['H7']/100,3)
        self.data['0']['E8']=round((100-self.data['0']['C4'])*self.data['0']['E7']/100,3)
        self.data['0']['E8']=round((100-self.data['0']['C4'])*self.data['0']['E7']/100,3)
        self.data['0']['C15']=round(21/(21-79*((self.data['0']['C13']-0.5*self.data['0']['E13']-0.5*self.data['0']['F13']-2*self.data['0']['H13'])/(self.data['0']['G13']-(self.data['0']['H8']*(self.data['0']['D13']+self.data['0']['E13']+self.data['0']['H13']))/(self.data['0']['D8']+self.data['0']['C8']+self.data['0']['F8'])))),3)
        self.data['0']['C16']=round(0.0238*(self.data['0']['E8']+self.data['0']['C8'])+0.0925*self.data['0']['F8'],3)
        self.data['0']['C17']=round(0.01*(self.data['0']['C8']+3*self.data['0']['F8']+self.data['0']['D8']+self.data['0']['E8']+self.data['0']['H8']+self.data['0']['C4'])+0.79*self.data['0']['C16'],3)
        self.data['0']['C18']=round(self.data['0']['C17']+(self.data['0']['C15']*(1+0.00124*self.data['0']['C10'])-1)*self.data['0']['C16'],3)
        self.data['0']['D19']=round(100/(100+1.88*self.data['0']['E13']+1.88*self.data['0']['F13']+9.52*self.data['0']['H13']-4.762*self.data['0']['C13']),3)
        self.data['0']['C9']=round(126.36*self.data['0']['C8']+107.85*self.data['0']['E8']+358.81*self.data['0']['F8'],3)
        self.data['0']['C20']=round(((0.01*(2*self.data['0']['F8']+self.data['0']['E8']+self.data['0']['C4'])+0.00124*(self.data['0']['C10'])*(self.data['0']['C15'])*(self.data['0']['C16']))/(self.data['0']['D19']*self.data['0']['C18']))*100,3)
        self.data['0']['C14']=round(((100-self.data['0']['C20'])/100)*self.data['0']['C13'],3)
        self.data['0']['D14']=round(((100-self.data['0']['C20'])/100)*self.data['0']['D13'],3)
        self.data['0']['E14']=round(((100-self.data['0']['C20'])/100)*self.data['0']['E13'],3)
        self.data['0']['F14']=round(((100-self.data['0']['C20'])/100)*self.data['0']['F13'],3)
        self.data['0']['G14']=round(((100-self.data['0']['C20'])/100)*self.data['0']['G13'],3)
        self.data['0']['H14']=round(((100-self.data['0']['C20'])/100)*self.data['0']['H13'],3)

    def form2(self):
        self.data['1']['D5']=round(self.rrb(self.data['1']['C5'],'一氧化碳'),3)
        self.data['1']['E5']=round(self.rrb(self.data['1']['C5'],'二氧化碳'),3)
        self.data['1']['F5']=round(self.rrb(self.data['1']['C5'],'氢气'),3)
        self.data['1']['G5']=round(self.rrb(self.data['1']['C5'],'氮气'),3)
        self.data['1']['D6']=round(self.rrb(self.data['1']['C6'],'一氧化碳'),3)
        self.data['1']['E6']=round(self.rrb(self.data['1']['C6'],'二氧化碳'),3)
        self.data['1']['F6']=round(self.rrb(self.data['1']['C6'],'氢气'),3)
        self.data['1']['G6']=round(self.rrb(self.data['1']['C6'],'氮气'),3)
        self.data['1']['D7']=round(self.rrb(self.data['1']['C7'],'一氧化碳'),3)
        self.data['1']['E7']=round(self.rrb(self.data['1']['C7'],'二氧化碳'),3)
        self.data['1']['F7']=round(self.rrb(self.data['1']['C7'],'氢气'),3)
        self.data['1']['G7']=round(self.rrb(self.data['1']['C7'],'氮气'),3)
        self.data['1']['C8']=round((self.data['1']['D5']*self.data['0']['C8']+self.data['1']['E5']*self.data['0']['D8']+self.data['1']['F5']*self.data['0']['E8']+self.data['1']['G5']*self.data['0']['H8'])/100,3)
        self.data['1']['C9']=round((self.data['1']['D7']*self.data['0']['C8']+self.data['1']['E7']*self.data['0']['D8']+self.data['1']['F7']*self.data['0']['E8']+self.data['1']['G7']*self.data['0']['H8'])/100,3)
        self.data['1']['C10']=round((self.data['1']['D6']*self.data['0']['E14']+self.data['1']['E6']*self.data['0']['D14']+self.data['1']['F6']*self.data['0']['F14']+self.data['1']['G6']*self.data['0']['G14'])/100,3)
        self.data['1']['C11']=round((self.data['1']['D7']*self.data['0']['E14']+self.data['1']['E7']*self.data['0']['D14']+self.data['1']['F7']*self.data['0']['F14']+self.data['1']['G7']*self.data['0']['G14'])/100,3)

    def form3(self):
        self.data['2']['E5']=round(self.rrb(self.data['2']['C5'],'干空气'),3)
        self.data['2']['E6']=round(self.rrb(self.data['2']['C6'],'干空气'),3)
        self.data['2']['E7']=round(self.rrb(self.data['2']['C7'],'干空气'),3)
        self.data['2']['E8']=round(self.rrb(self.data['2']['C8'],'干空气'),3)

    def form4(self):
        self.data['3']['E5']=round(self.data['1']['C8'],3)
        self.data['3']['F5']=round(self.data['1']['C9'],3)

    def form6(self):
        self.data['5']['H4']=round(self.data8(self.data['5']['F4'],'传热系数'),3)
        self.data['5']['H5']=round(self.data8(self.data['5']['F5'],'传热系数'),3)
        self.data['5']['H6']=round(self.data8(self.data['5']['F6'],'传热系数'),3)
        self.data['5']['H7']=round(self.data8(self.data['5']['F7'],'传热系数'),3)
        self.data['5']['H8']=round(self.data8(self.data['5']['F8'],'传热系数'),3)
        self.data['5']['H9']=round(self.data8(self.data['5']['F9'],'传热系数'),3)
        self.data['5']['H10']=round(self.data8(self.data['5']['F10'],'传热系数'),3)
        self.data['5']['H11']=round(self.data8(self.data['5']['F11'],'传热系数'),3)
        self.data['5']['H12']=round(self.data8(self.data['5']['F12'],'传热系数'),3)
        self.data['5']['J4']=round(self.data['5']['H4']*(self.data['5']['F4']-self.data['5']['G4']),3)
        self.data['5']['J5']=round(self.data['5']['H5']*(self.data['5']['F5']-self.data['5']['G4']),3)
        self.data['5']['J6']=round(self.data['5']['H6']*(self.data['5']['F6']-self.data['5']['G4']),3)
        self.data['5']['J7']=round(self.data['5']['H7']*(self.data['5']['F7']-self.data['5']['G4']),3)
        self.data['5']['J8']=round(self.data['5']['H8']*(self.data['5']['F8']-self.data['5']['G4']),3)
        self.data['5']['J9']=round(self.data['5']['H9']*(self.data['5']['F9']-self.data['5']['G4']),3)
        self.data['5']['J10']=round(self.data['5']['H10']*(self.data['5']['F9']-self.data['5']['G4']),3)
        self.data['5']['J11']=round(self.data['5']['H11']*(self.data['5']['F9']-self.data['5']['G4']),3)
        self.data['5']['J12']=round(self.data['5']['H12']*(self.data['5']['F9']-self.data['5']['G4']),3)

    def form9(self):
        self.data['8']['F8']=round(self.data['8']['F6']*self.data['4']['C5']*(1-self.data['8']['F7'])*60,3)
        self.data['8']['F9']=round((self.data['3']['C5']*self.data['7']['C4'])/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['8']['F10']=round(self.data['0']['C16']*(1+0.00124*self.data['0']['C3']),3)
        self.data['8']['D6']=round(self.data['8']['F9']*self.data['0']['C9'],3)
        self.data['8']['D7']=round(self.data['8']['F9']*(self.data['1']['C8']*self.data['1']['C5']-self.data['1']['C9']*self.data['1']['C7']),3)
        self.data['8']['D8']=round(self.data['8']['F9']*self.data['0']['C15']*self.data['8']['F10']*(self.data['2']['E6']*self.data['2']['C6']-self.data['2']['E5']*self.data['2']['C5']),3)
        self.data['8']['D9']=round(self.data['2']['E7']*self.data['2']['C7']-self.data['2']['E5']*self.data['2']['C5'],3)
        self.data['8']['D10']=round(self.data['8']['D6']+self.data['8']['D7']+self.data['8']['D8']+self.data['8']['D9'],3)

    def form10(self):
        self.data['9']['D4']=round(self.data['2']['E8']*self.data['2']['C8']-self.data['2']['E5']*self.data['2']['C5'],3)
        self.data['9']['D5']=round(self.data['8']['F9']*self.data['0']['C18']*self.data['0']['D19']*(self.data['1']['C10']*self.data['1']['C6']-self.data['1']['C11']*self.data['1']['C7']),3)
        self.data['9']['D6']=round(self.data['8']['F9']*self.data['0']['C17']*self.data['0']['D19']*(126.36*self.data['0']['E14']+107.85*self.data['0']['F14']),3)
        self.data['9']['D7']=round(self.data['7']['E4']*3600*(self.data['5']['J4']*self.data['5']['D4']+self.data['5']['J5']*self.data['5']['D5']+self.data['5']['J6']*self.data['5']['D6'])/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['D8']=round(self.data['7']['E4']*3600*(self.data['5']['J7']*self.data['5']['D7'])/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['D9']=round(self.data['7']['E4']*3600*(self.data['5']['J8']*self.data['5']['D8'])/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['D10']=round(self.data['7']['E4']*3600*(self.data['5']['J9']*self.data['5']['D9'])/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['D11']=round((self.data['9']['K3']*self.data['7']['E4']*(self.data['9']['K7']*self.data['9']['K5']-self.data['9']['K6']*self.data['9']['K4']))/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['D12']=round(self.data['8']['F9']*self.data['9']['K8']*0.001*(4.18*(100-self.data['1']['C5'])+2253+5.2*(1*self.data['1']['C6']-36)),3)
        self.data['9']['D13']=round(self.data['5']['D10']*self.data['5']['J10']*self.data['7']['E4']/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['D14']=round(self.data['5']['D11']*self.data['5']['J11']*self.data['7']['E4']/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['D15']=round(self.data['5']['D12']*self.data['5']['J12']*self.data['7']['E4']/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['G4']=round(3.13*(self.data['6']['C4']/2)*(self.data['6']['C4']/2)*self.data['6']['D4'],3)
        self.data['9']['D16']=round((self.data['9']['G4']*(self.data['2']['E8']*self.data['2']['C8']-self.data['2']['E5']*self.data['2']['C5']))/(self.data['8']['F8']*self.data['7']['D4']),3)
        self.data['9']['D17']=round(self.data['8']['D10']-(self.data['9']['D4']+self.data['9']['D5']+self.data['9']['D6']+self.data['9']['D7']+self.data['9']['D8']+self.data['9']['D9']+self.data['9']['D10']+self.data['9']['D16']+self.data['9']['D11']+self.data['9']['D13']+self.data['9']['D14']+self.data['9']['D15']),3)

    def form12(self):
        self.data['11']['F4']=round(self.data['4']['F5'],3)
        self.data['11']['F6']=round(self.data['4']['G5'],3)
        self.data['11']['F7']=round(self.data['3']['C5'],3)
        self.data['11']['F8']=round(self.data['8']['F8'],3)
        self.data['11']['F9']=round(self.data['8']['D6'],3)
        
    def form13(self):
        self.data['12']['C3']=round((self.data['9']['D17']/self.data['8']['D10'])*100,3)
        self.data['12']['C5']=round(100*(self.data['9']['D4']-self.data['8']['D9']+self.data['9']['D8']+self.data['9']['D9'])/(self.data['8']['D10']-self.data['8']['D9']),3)
        self.data['12']['C6']=round(100*(self.data['9']['D4']-self.data['8']['D9'])/(self.data['8']['D10']-self.data['8']['D9']),3)